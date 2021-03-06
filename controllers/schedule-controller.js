const Schedule = require('../models/Schedule')


const scheduleController = {
    index(req, res, next) {
        Schedule.getAll()
            .then((workouts) => {
                res.render('schedule/index', {
                    message: 'ok',
                    workouts,
                    isAuthenticated: !!req.user,
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
            date: req.body.date,
            user_id: req.user.id
        })
            .save()
            .then((workout) => {
                res.redirect('/user/create');
            })
            .catch(next)
    },
    show(req, res, next) {
        Schedule.getById(req.params.id)
            .then((workout) => {
                res.locals.workout = workout,
                    next()
            })
            .catch(next)
    },
    update(req, res, next) {
        Schedule.getById(req.params.id)
            .then((workout) => {
                return workout.update({
                    split: req.body.split,
                    exercises: req.body.exercises,
                    notes: req.body.notes,
                    date: req.body.date,
                    status: req.body.status,
                })
            })
            .then((updatedWorkout) => {
                res.redirect(`/schedule/${req.params.id}/`)
            })
            .catch(next)
    },
    delete(req, res, next) {
        Schedule.getById(req.params.id)
            .then((workout) => {
                return workout.delete()
            })
            .then(() => {
                res.redirect('/user/schedule')
            })
            .catch(next)
    }
}

module.exports = scheduleController