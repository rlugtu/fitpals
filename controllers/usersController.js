const bcrypt = require('bcryptjs')
const User = require('../models/User')
const moment = require('moment')
const usersController = {
    index(req, res, next) {
        req.user
            .findUserSchedule()
            .then((workouts) => {
                res.render('user', {
                    workouts,
                    moment,
                    user: req.user
                });
            })
            .catch(next)
    },

    indexSchedule(req, res, next) {
        req.user
            .findUserSchedule()
            .then((workouts) => {
                res.render('userSchedule', {
                    workouts,
                    moment: moment
                });
            })
            .catch(next)
    },
    update(req, res, next) {
        User.getById(req.params.id)
            .then((foundUser) => {
                return foundUser.update({
                    name: req.body.name,
                    username: req.body.username,
                    location: req.body.location,
                    about: req.body.about,
                    hobbies: req.body.hobbies,
                })
            })
            .then((updatedUser) => {
                res.redirect(`/user`)
            })
            .catch(next)
    },

    create(req, res, next) {
        const salt = bcrypt.genSaltSync()
        const hash = bcrypt.hashSync(req.body.password, salt)
        new User({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            birthday: req.body.birthday,
            location: req.body.location,
            about: req.body.about,
            hobbies: req.body.hobbies,
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