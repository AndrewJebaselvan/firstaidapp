from app.database import Base, engine
from app.models import (
    User,
    FirstAidTopic,
    QuizQuestion,
    quiz_result
)


def initialize_database():
    Base.metadata.create_all(bind=engine)
    print("Database tables created successfully.")


if __name__ == "__main__":
    initialize_database()