CREATE TABLE
IF NOT EXISTS workouts
(
    id SERIAL PRIMARY KEY,
    split VARCHAR
(255) NOT NULL,
    exercises VARCHAR
(255),
    status BOOLEAN NOT NULL DEFAULT false,
    notes TEXT,
    date DATE
)