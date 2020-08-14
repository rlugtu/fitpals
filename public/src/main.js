
const addButton = document.querySelector('.addButton')
const addWorkoutBox = document.querySelector('.newWorkoutContent')
const fullSchedule = document.querySelector('.fullSchedule')
const completedSchedule = document.querySelector('.complete')
addButton.addEventListener('click', () => {
    addWorkoutBox.classList.toggle('none')
    fullSchedule.classList.toggle('none')
    completedSchedule.classList.toggle('none')
})

// const animateAll = () => {
//     let workouts = document.querySelectorAll('.singleWorkouts')
//     workouts.forEach((workout) => {
//         if (workout.classList.contains('fadeSlide')) {
//             setTimeout(function () {
//                 workout.classList.add('fadeSlide')
//             }, 1000)
//         }
//     })
// }

animateAll()
