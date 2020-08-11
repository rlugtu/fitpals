const Schedule = require('../models/Schedule')

const scheduleController = {
    index(req, res, next) {
        Schedule.getAll()
            .then(workouts => {
                res.json({
                    workouts
                })
            }).catch(next)
    }
}

module.exports = scheduleController