const express = require('express')
const scheduleRouter = express.Router()
const scheduleController = require('../controllers/schedule-controller')

scheduleRouter.get('/', scheduleController.index)
scheduleRouter.get('/:id([0-9]+)', scheduleController.show, (req, res) => {
    res.render('schedule/show', {
        schedule: res.locals.workout
    })
})
scheduleRouter.post('/', scheduleController.create)


module.exports = scheduleRouter;