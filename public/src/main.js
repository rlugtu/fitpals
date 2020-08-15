const addButton = document.querySelector('.addButton')
const addWorkoutBox = document.querySelector('.newWorkoutContent')
const fullSchedule = document.querySelector('.fullSchedule')
const completedSchedule = document.querySelector('.complete')

if (addButton) {
    addButton.addEventListener('click', () => {
        addWorkoutBox.classList.toggle('none')
        fullSchedule.classList.toggle('none')
        completedSchedule.classList.toggle('none')
    })
}

const editButton = document.querySelector('.editButton')
const userInfo = document.querySelector('.userInfo')
const editContainer = document.querySelector('.editContainer')
const upcomingScheduleContent = document.querySelector('.userScheduleContent')
if (editButton) {
    editButton.addEventListener('click', () => {
        upcomingScheduleContent.classList.toggle('none')
        editContainer.classList.toggle('none')
    })
}

const editBack = document.querySelector('.editBack')
if (editBack) {
    editBack.addEventListener('click', () => {
        upcomingScheduleContent.classList.toggle('none')
        editContainer.classList.toggle('none')
    })
}

//format todays date to YYYY MM DD to set as min value for calendar
// assistance from https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd
const dateFormat = () => {
    const today = new Date()
    month = '' + (today.getMonth() + 1)
    day = '' + today.getDate()
    year = '' + today.getFullYear()
    if (month.length < 2) {
        month = '0' + month
    }
    if (day.length < 2) {
        day = '0' + day
    }
    return [year, month, day].join('-')
}
const todaysDate = (dateFormat(new Date()))
const dateMin = document.querySelector('#inputDate')
if (dateMin) {
    dateMin.setAttribute('min', todaysDate)
}
