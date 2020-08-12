CREATE TABLE
IF NOT EXISTS users
(
    id SERIAL PRIMARY KEY,
    username VARCHAR
(255) UNIQUE NOT NULL,
    email VARCHAR
(255) UNIQUE NOT NULL,
    password_digest TEXT NOT NULL
);

ALTER TABLE workouts ADD COLUMN user_id INTEGER REFERENCES users
(id);