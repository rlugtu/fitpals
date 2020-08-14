
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

