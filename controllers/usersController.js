const bcrypt = require('bcryptjs')
const User = require('../models/User')

const usersController = {
    index(req, res, next) {
        req.user
            .findUserSchedule()
            .then((workouts) => {
                res.render('user', {
                    workouts,
                });
            })
            .catch(next)
    },

    create(req, res, next) {
        const salt = bcrypt.genSaltSync()
        const hash = bcrypt.hashSync(req.body.password, salt)
        new User({
            username: req.body.username,
            email: req.body.email,
            password_digest: hash,
        })
            .save()
            .then((user) => {
                req.login(user, (err) => {
                    if (err) return next(err)
                    res.redirect('/user')
                })
            })
            .catch(next)
    }
}

module.exports = usersController