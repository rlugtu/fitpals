const db = require('../db/config')

class Schedule {
    constructor(workout) {
        this.id = id || null
        this.split = split
        this.exercises = exercises
        this.status = status || false
        this.notes = notes
        this.date = date
    }

    static getAll() {
        return db.manyOrNone('SELECT * FROM workouts ORDER BY date DESC;').then(workouts => {
            return workouts.map(workout => new this(workout))
        })
    }
}

module.exports = Schedule