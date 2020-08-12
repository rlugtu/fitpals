const db = require('../db/config')
const Schedule = require('./Schedule')

class User {
    constructor({ id, username, email, password_digest }) {
        this.id = id || null
        this.username = username
        this.email = email
        this.password_digest = password_digest
    }

    static findByUsername(username) {
        return db
            .oneOrNone('SELECT * FROM users WHERE username = $1', username)
            .then((user) => {
                if (user) return new this(user)
                else throw new Error('User not found')
            })
    }

    static getById(id) {
        return db
            .oneOrNone(`SELECT * FROM users WHERE id = $1`, id)
            .then((user) => {
                if (user) return new this(user)
                throw new Error('no user found')
            })
    }

    save() {
        return db
            .one(
                `INSERT INTO users
            (username, email, password_digest)
            VALUES ($/username/, $/email/, $/password_digest/)
            RETURNING *`,
                this
            )
            .then((savedUser) => Object.assign(this, savedUser))
    }
    findUserSchedule() {
        return db
            .manyOrNone(`SELECT * FROM workouts WHERE user_id =$1`, this.id)
            .then((workouts) => {
                return workouts.map((workout) => new Schedule(workout))
            })
    }
}

module.exports = User