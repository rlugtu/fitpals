const db = require('../db/config')

class Schedule {
    constructor({ id, split, exercises, status, notes, date, user_id }) {
        this.id = id || null
        this.split = split
        this.exercises = exercises
        this.status = status || false
        this.notes = notes
        this.date = date
        this.user_id = user_id
    }

    static getAll() {
        return db.manyOrNone('SELECT * FROM workouts ORDER BY date ASC;').then(workouts => {
            return workouts.map(workout => new this(workout))
        })
    }

    static getById(id) {
        return db
            .oneOrNone('SELECT * FROM workouts WHERE id =$1', id)
            .then((workout) => {
                if (workout) return new this(workout)
                else throw new Error('No Workout Found')
            })
    }

    save() {
        return db.one(`INSERT INTO workouts
        (split, exercises, status, notes, date, user_id)
        VALUES
        ($/split/, $/exercises/, $/status/, $/notes/, $/date/, $/user_id/)
        RETURNING *`, this).then(workout => Object.assign(this, workout))
    }
    update(changes) {
        Object.assign(this, changes)
        return db
            .one(
                `UPDATE workouts SET
            split = $/split/,
            exercises = $/exercises/,
            status = $/status/,
            notes = $/notes/,
            date = $/date/
            WHERE id = $/id/
            RETURNING *
            `,
                this
            )
            .then((updatedWorkout) => Object.assign(this, updatedWorkout))
    }

    delete() {
        return db.none('DELETE FROM workouts WHERE id = $1', this.id)
    }
}

module.exports = Schedule