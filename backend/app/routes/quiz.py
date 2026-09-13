from flask import Blueprint, jsonify, request, session

from app.database import SessionLocal
from app.models.quiz_question import QuizQuestion
from app.models.quiz_result import QuizResult


quiz_bp = Blueprint(
    "quiz",
    __name__,
    url_prefix="/api/quiz"
)


@quiz_bp.get("")
def get_quiz():
    db = SessionLocal()

    try:
        questions = db.query(QuizQuestion).all()

        return jsonify([
            {
                "id": question.id,
                "question": question.question,
                "options": question.options
            }
            for question in questions
        ]), 200

    finally:
        db.close()


@quiz_bp.post("/submit")
def submit_quiz():
    user_id = session.get("user_id")

    if not user_id:
        return jsonify({
            "error": "Login required to submit the quiz"
        }), 401

    data = request.get_json()

    if not data or not isinstance(data.get("answers"), list):
        return jsonify({
            "error": "Answers must be provided as a list"
        }), 400

    db = SessionLocal()

    try:
        questions = db.query(QuizQuestion).all()

        if not questions:
            return jsonify({
                "error": "No quiz questions available"
            }), 404

        submitted_answers = {
            answer.get("question_id"): answer.get("answer")
            for answer in data["answers"]
        }

        score = 0

        for question in questions:
            user_answer = submitted_answers.get(question.id)

            if user_answer == question.correct_answer:
                score += 1

        result = QuizResult(
            user_id=user_id,
            score=score
        )

        db.add(result)
        db.commit()
        db.refresh(result)

        return jsonify({
            "message": "Quiz submitted successfully",
            "result": {
                "id": result.id,
                "score": score,
                "total_questions": len(questions)
            }
        }), 201

    finally:
        db.close()