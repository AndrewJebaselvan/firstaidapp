from flask import Blueprint, jsonify, request, session
from werkzeug.security import check_password_hash, generate_password_hash

from app.database import SessionLocal
from app.models.user import User


auth_bp = Blueprint("auth", __name__, url_prefix="/api/auth")


@auth_bp.post("/register")
def register():
    data = request.get_json()

    if not data:
        return jsonify({"error": "Request body is required"}), 400

    name = data.get("name", "").strip()
    email = data.get("email", "").strip().lower()
    password = data.get("password", "")

    if not name or not email or not password:
        return jsonify({
            "error": "Name, email and password are required"
        }), 400

    db = SessionLocal()

    try:
        existing_user = db.query(User).filter(
            User.email == email
        ).first()

        if existing_user:
            return jsonify({
                "error": "Email is already registered"
            }), 409

        user = User(
            name=name,
            email=email,
            password_hash=generate_password_hash(password)
        )

        db.add(user)
        db.commit()
        db.refresh(user)

        return jsonify({
            "message": "Registration successful",
            "user": {
                "id": user.id,
                "name": user.name,
                "email": user.email
            }
        }), 201

    finally:
        db.close()


@auth_bp.post("/login")
def login():
    data = request.get_json()

    if not data:
        return jsonify({"error": "Request body is required"}), 400

    email = data.get("email", "").strip().lower()
    password = data.get("password", "")

    if not email or not password:
        return jsonify({
            "error": "Email and password are required"
        }), 400

    db = SessionLocal()

    try:
        user = db.query(User).filter(
            User.email == email
        ).first()

        if not user or not check_password_hash(
            user.password_hash,
            password
        ):
            return jsonify({
                "error": "Invalid email or password"
            }), 401

        session["user_id"] = user.id

        return jsonify({
            "message": "Login successful",
            "user": {
                "id": user.id,
                "name": user.name,
                "email": user.email
            }
        }), 200

    finally:
        db.close()


@auth_bp.post("/logout")
def logout():
    session.clear()

    return jsonify({
        "message": "Logout successful"
    }), 200


@auth_bp.get("/me")
def current_user():
    user_id = session.get("user_id")

    if not user_id:
        return jsonify({
            "error": "Not authenticated"
        }), 401

    db = SessionLocal()

    try:
        user = db.get(User, user_id)

        if not user:
            session.clear()

            return jsonify({
                "error": "User not found"
            }), 404

        return jsonify({
            "user": {
                "id": user.id,
                "name": user.name,
                "email": user.email
            }
        }), 200

    finally:
        db.close()