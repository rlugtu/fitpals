const express = require('express')
const userRouter = express.Router()


const authHelpers = require('../services/auth/auth-helpers')
const usersController = require('../controllers/usersController')
userRouter.get('/', authHelpers.loginRequired, usersController.index)
userRouter.get('/schedule', authHelpers.loginRequired, usersController.indexSchedule)
userRouter.get('/new', authHelpers.loginRedirect, (req, res) => {
    res.render('auth/register')
})

userRouter.post('/', usersController.create)

userRouter.put('/:id([0-9]+)', usersController.update)

module.exports = userRouter;