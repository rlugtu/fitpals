const express = require('express')
const scheduleRouter = express.Router()
const scheduleController = require('../controllers/schedule-controller')

scheduleRouter.get('/', scheduleController.index)
scheduleRouter.post('/', scheduleController.create)


module.exports = scheduleRouter;