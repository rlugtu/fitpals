const Schedule = require('../models/Schedule')

const scheduleController = {
    index(req, res, next) {
        Schedule.getAll()
            .then((workouts) => {
                res.render('schedule/index', {
                    workouts,
                });
            })
            .catch(next)
    },

    create(req, res, next) {
        new Schedule({
            split: req.body.split,
            exercises: req.body.exercises,
            status: req.body.status,
            notes: req.body.notes,
            date: req.body.date
        })
            .save()
            .then((workout) => {
                res.redirect('schedule/');
            })
            .catch(next)
    },
    show(req, res, next) {
        Schedule.getById(req.params.id)
            .then((workout) => {
                res.locals.workout = workout
                next()
            })
            .catch(next)
    }
}

module.exports = scheduleController