const db = require('../db/config')
const Schedule = require('./Schedule')

class User {
    constructor({ id, name, username, email, birthday, location, about, hobbies, password_digest }) {
        this.id = id || null
        this.name = name
        this.username = username
        this.email = email
        this.birthday = birthday
        this.location = location
        this.about = about
        this.hobbies = hobbies
        this.password_digest = password_digest
    }

    static findByUsername(username) {
        return db
            .oneOrNone('SELECT * FROM users WHERE username = $1', username)
            .then((user) => {
                if (user) return new this(user)
                // else throw new Error('User not found')
            })
    }

    static getById(id) {
        return db
            .oneOrNone(`SELECT * FROM users WHERE id=$1`, id)
            .then((user) => {
                if (user) return new this(user)
                throw new Error('no user found')
            })
    }

    save() {
        return db
            .one(
                `INSERT INTO users
            (name, username, email, birthday, location, about, hobbies, password_digest)
            VALUES ($/name/, $/username/, $/email/, $/birthday/, $/location/, $/about/, $/hobbies/, $/password_digest/)
            RETURNING *`,
                this
            )
            .then((savedUser) => Object.assign(this, savedUser))
    }

    update(changes) {
        Object.assign(this, changes)
        return db
            .one(`UPDATE users SET
        name = $/name/,
        location = $/location/,
        about = $/about/,
        hobbies = $/hobbies/
        WHERE id = $/id/
        RETURNING *`,
                this
            )
            .then((updatedUser) => Object.assign(this, updatedUser))
    }

    findUserSchedule() {
        return db
            .manyOrNone(`SELECT * FROM workouts WHERE user_id =$1 ORDER BY date ASC`, this.id)
            .then((workouts) => {
                return workouts.map((workout) => new Schedule(workout))
            })
    }

}

module.exports = User