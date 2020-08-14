const express = require('express')
const scheduleRouter = express.Router()
const scheduleController = require('../controllers/schedule-controller')
const authHelpers = require('../services/auth/auth-helpers')
const usersController = require('../controllers/usersController')
const moment = require('moment')
// SHOW ALL WORKOUTS
scheduleRouter.get('/', scheduleController.index)
// GET SINGLE WORKOUT 
scheduleRouter.get('/:id([0-9]+)', scheduleController.show, (req, res) => {
    res.render('schedule/show', {
        schedule: res.locals.workout,
        moment: moment
    })
})
// CREATE
scheduleRouter.post('/', scheduleController.create)

// EDIT 
scheduleRouter.get('/:id/edit', scheduleController.show, (req, res) => {
    res.render('schedule/edit', {
        workout: res.locals.workout,
        moment: moment
    })
})
scheduleRouter.put('/:id([0-9]+)', scheduleController.update)

scheduleRouter.delete('/:id([0-9]+)', scheduleController.delete)

module.exports = scheduleRouter;