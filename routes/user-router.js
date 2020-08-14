const express = require('express')
const userRouter = express.Router()

const authHelpers = require('../services/auth/auth-helpers')
const usersController = require('../controllers/usersController')
userRouter.get('/', authHelpers.loginRequired, usersController.index)
userRouter.get('/schedule', authHelpers.loginRequired, usersController.indexSchedule)
userRouter.get('/completed', authHelpers.loginRequired, usersController.indexCompleted)
userRouter.get('/new', authHelpers.loginRedirect, (req, res) => {
    res.render('auth/register')
})

userRouter.post('/', usersController.create)

module.exports = userRouter;