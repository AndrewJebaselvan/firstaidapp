from sqlalchemy import JSON, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


class QuizQuestion(Base):
    __tablename__ = "quiz_questions"

    id: Mapped[int] = mapped_column(primary_key=True)

    question: Mapped[str] = mapped_column(
        Text,
        nullable=False
    )

    options: Mapped[list] = mapped_column(
        JSON,
        nullable=False
    )

    correct_answer: Mapped[str] = mapped_column(
        String(255),
        nullable=False
    )