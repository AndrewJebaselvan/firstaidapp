from flask import Blueprint, jsonify, request

from app.database import SessionLocal
from app.models.first_aid_topic import FirstAidTopic


topics_bp = Blueprint(
    "topics",
    __name__,
    url_prefix="/api/topics"
)


@topics_bp.get("")
def get_topics():
    db = SessionLocal()

    try:
        topics = db.query(FirstAidTopic).all()

        return jsonify([
            {
                "id": topic.id,
                "title": topic.title,
                "description": topic.description,
                "instructions": topic.instructions,
                "warnings": topic.warnings
            }
            for topic in topics
        ]), 200

    finally:
        db.close()


@topics_bp.get("/<int:topic_id>")
def get_topic(topic_id):
    db = SessionLocal()

    try:
        topic = db.get(FirstAidTopic, topic_id)

        if not topic:
            return jsonify({
                "error": "Topic not found"
            }), 404

        return jsonify({
            "id": topic.id,
            "title": topic.title,
            "description": topic.description,
            "instructions": topic.instructions,
            "warnings": topic.warnings
        }), 200

    finally:
        db.close()


@topics_bp.post("")
def create_topic():
    data = request.get_json()

    if not data:
        return jsonify({
            "error": "Request body is required"
        }), 400

    required_fields = [
        "title",
        "description",
        "instructions",
        "warnings"
    ]

    if not all(data.get(field) for field in required_fields):
        return jsonify({
            "error": "All topic fields are required"
        }), 400

    db = SessionLocal()

    try:
        topic = FirstAidTopic(
            title=data["title"],
            description=data["description"],
            instructions=data["instructions"],
            warnings=data["warnings"]
        )

        db.add(topic)
        db.commit()
        db.refresh(topic)

        return jsonify({
            "message": "Topic created successfully",
            "topic": {
                "id": topic.id,
                "title": topic.title,
                "description": topic.description,
                "instructions": topic.instructions,
                "warnings": topic.warnings
            }
        }), 201

    finally:
        db.close()


@topics_bp.put("/<int:topic_id>")
def update_topic(topic_id):
    data = request.get_json()

    if not data:
        return jsonify({
            "error": "Request body is required"
        }), 400

    db = SessionLocal()

    try:
        topic = db.get(FirstAidTopic, topic_id)

        if not topic:
            return jsonify({
                "error": "Topic not found"
            }), 404

        topic.title = data.get("title", topic.title)
        topic.description = data.get(
            "description",
            topic.description
        )
        topic.instructions = data.get(
            "instructions",
            topic.instructions
        )
        topic.warnings = data.get(
            "warnings",
            topic.warnings
        )

        db.commit()
        db.refresh(topic)

        return jsonify({
            "message": "Topic updated successfully"
        }), 200

    finally:
        db.close()


@topics_bp.delete("/<int:topic_id>")
def delete_topic(topic_id):
    db = SessionLocal()

    try:
        topic = db.get(FirstAidTopic, topic_id)

        if not topic:
            return jsonify({
                "error": "Topic not found"
            }), 404

        db.delete(topic)
        db.commit()

        return jsonify({
            "message": "Topic deleted successfully"
        }), 200

    finally:
        db.close()