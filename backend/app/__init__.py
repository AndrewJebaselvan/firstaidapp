from flask import Flask
from flask_cors import CORS

from config import Config
from app.routes.auth import auth_bp
from app.routes.topics import topics_bp
from app.routes.quiz import quiz_bp


def create_app():
    app = Flask(__name__)

    app.config["SECRET_KEY"] = Config.SECRET_KEY

    CORS(
        app,
        origins=["http://localhost:5173"],
        supports_credentials=True
    )

    app.register_blueprint(auth_bp)
    app.register_blueprint(topics_bp)
    app.register_blueprint(quiz_bp)

    return app