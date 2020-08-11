const db = require('../db/config')

class Schedule {
    constructor(workout) {
        this.id = workout.id || null
        this.split = workout.split
        this.exercises = workout.exercises
        this.status = workout.status || false
        this.notes = workout.notes
        this.date = workout.date
    }

    static getAll() {
        return db.manyOrNone('SELECT * FROM workouts ORDER BY date DESC;').then(workouts => {
            return workouts.map(workout => new this(workout))
        })
    }

    save() {
        return db.one(`INSERT INTO workouts
        (split, exercises, status, notes, date)
        VALUES
        ($/split/, $/exercises/, $/status/, $/notes/, $/date/)
        RETURNING *`, this).then(workout => Object.assign(this, workout))
    }
}

module.exports = Schedule