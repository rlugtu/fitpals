const express = require('express')
const scheduleRouter = express.Router()
const scheduleController = require('../controllers/schedule-controller')

// SHOW ALL WORKOUTS
scheduleRouter.get('/', scheduleController.index)
// GET SINGLE WORKOUT 
scheduleRouter.get('/:id([0-9]+)', scheduleController.show, (req, res) => {
    res.render('schedule/show', {
        schedule: res.locals.workout
    })
})
// CREATE
scheduleRouter.post('/', scheduleController.create)

// EDIT 
scheduleRouter.get('/:id/edit', scheduleController.show, (req, res) => {
    res.render('schedule/edit', {
        workout: res.locals.workout
    })
})
scheduleRouter.put('/:id([0-9]+)', scheduleController.update)

scheduleRouter.delete('/:id([0-9]+)', scheduleController.delete)

module.exports = scheduleRouter;