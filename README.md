# First Aid Awareness App

A lightweight full-stack web application designed to improve first-aid awareness through educational topics and an interactive quiz.

The application provides users with practical first-aid information, lets registered users take a quiz, and stores quiz results in a MySQL database.

## Features

- User registration and login
- Session-based authentication
- First-aid learning topics
- Individual topic detail pages
- Interactive first-aid awareness quiz
- Quiz scoring
- Quiz result storage
- REST API communication between frontend and backend
- MySQL database with SQLAlchemy ORM
- Responsive frontend layout
- Modern, minimal user interface

## Tech Stack

### Frontend

- React
- JavaScript
- Vite
- React Router
- CSS

### Backend

- Python
- Flask
- Flask-CORS
- SQLAlchemy
- PyMySQL
- python-dotenv
- Werkzeug password hashing

### Database

- MySQL

## Project Structure

```text
firstaidapp/
├── backend/
│   ├── app/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── __init__.py
│   │   └── database.py
│   ├── init_db.py
│   ├── config.py
│   ├── run.py
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
├── database/
│   └── first_aid_db.sql
│
├── .gitignore
└── README.md
```

## Database

The project includes a SQL dump at:

```text
database/first_aid_db.sql
```

It contains the database schema and the application's first-aid topics and quiz questions.

User accounts and quiz result records are not included in the SQL dump.

Create the database in MySQL:

```sql
CREATE DATABASE first_aid_db;
```

Then import the SQL file using MySQL.

The main tables are:

- `users`
- `first_aid_topics`
- `quiz_questions`
- `quiz_results`

## Backend Setup

Open a terminal in the project root and move to the backend:

```bash
cd backend
```

Create and activate a virtual environment if needed.

### Windows

```bash
python -m venv venv
source venv/Scripts/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file inside `backend/`:

```env
DATABASE_URL=mysql+pymysql://root:YOUR_PASSWORD@localhost:3306/first_aid_db
SECRET_KEY=your-secret-key
```

Replace the database password with your local MySQL password.

Start the Flask development server:

```bash
python run.py
```

The backend runs on:

```text
http://localhost:5000
```

## Frontend Setup

Open another terminal and move to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

## Running the Application

Start both servers:

### Backend

```bash
cd backend
python run.py
```

### Frontend

```bash
cd frontend
npm run dev
```

Then open:

```text
http://localhost:5173
```

## Application Flow

```text
Home
  ↓
Learn First Aid
  ↓
Topic Details
  ↓
Quiz
  ↓
Login when required
  ↓
Submit Quiz
  ↓
Score
```

## API Endpoints

### Authentication

```text
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET  /api/auth/me
```

### Topics

```text
GET    /api/topics
GET    /api/topics/<topic_id>
POST   /api/topics
PUT    /api/topics/<topic_id>
DELETE /api/topics/<topic_id>
```

### Quiz

```text
GET  /api/quiz
POST /api/quiz/submit
```

## First-Aid Content

The application currently includes awareness topics covering areas such as:

- Bleeding
- Burns
- Choking
- CPR and cardiac emergencies
- Wounds
- Shock
- Nosebleeds
- Sprains and fractures
- Heat exhaustion and heatstroke
- Seizures
- Poisoning
- Stroke

The content is intended for first-aid awareness and education. It is not a replacement for professional medical care or emergency services.

## Environment Variables

Do not commit `.env` files or real credentials to GitHub.

Example:

```env
DATABASE_URL=mysql+pymysql://root:YOUR_PASSWORD@localhost:3306/first_aid_db
SECRET_KEY=your-secret-key
```

Keep production credentials in the hosting provider's environment-variable settings.

## Production Deployment

The project is structured so the React frontend and Flask backend can be deployed separately.

A planned deployment setup is:

```text
GitHub
   │
   ├── React/Vite frontend
   │
   └── Flask REST API
           │
           └── MySQL
```

The Flask production server should use Gunicorn on a Linux-based hosting platform.

The React frontend should be built using:

```bash
npm run build
```

Before production deployment, update the frontend API URL from the local Flask server to the deployed backend URL and configure the production database and secret key through environment variables.

## Security Notes

- Passwords are stored as secure hashes rather than plain text.
- Database credentials are stored in `.env` locally.
- `.env`, virtual environments, and `node_modules` should remain excluded from Git.
- Production secrets should be configured through the hosting provider rather than stored in source code.

## Git

Clone the repository:

```bash
git clone https://github.com/AndrewJebaselvan/firstaidapp.git
```

Enter the project:

```bash
cd firstaidapp
```

## Future Improvements

Possible future improvements include:

- User quiz history dashboard
- Admin interface for managing first-aid topics
- More quiz questions
- Additional first-aid topics
- Improved production monitoring
- Deployment automation

## Disclaimer

This application is an educational first-aid awareness project. For a real emergency, contact the appropriate emergency medical service and follow guidance from qualified professionals.
