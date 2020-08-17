# FitPal 
## Exercise and Fitness Planning App 
[Heroku](https://fitpaltracker.herokuapp.com/)

Fitpal is a fitness planning app that allows users to plan and schedule workouts 

## Wireframes
[wireframes](https://imgur.com/a/3koTcDB)

## User Story
- User creates profile with name, email, password, username, and birthday. About, location, and hobbies are optional.
- User can still edit profile info that is displayed in their dashboard
- User will be redirected to their dashboard which displays user information and a summary of the 4 most recent workouts and scheduled workouts.
- User can create a new workout by clicking the create tab on the nav bar and inputting desired information and date
- The create tab also shows the current schedule of upcoming workouts.
- The user can access their full schedule by clicking the schedule tab from the nav bar
- Clicking on a workout from the dashboard, schedule, or create links will redirect to a page just for that workout and show options to edit and delete the workout
- Clicking edit will prompt the user to a new text box where they can edit the workout or mark as complete.

## HTTP Routes
- GET'/auth/
  - GET '/login/', sign into account
  - GET '/logout/', signout of account 
- Get '/user', homepage
- Get'/user/new', renders register page to create an account
  - POST '/user', creates new user
- GET'/user/create' obtains upcoming schedule and gives option to add a new workout
- POST'/schedule' creates new workout 

- Get '/schedule/:id' renders specific workout page
  - GET '/schedule/:id/edit' renders edit page for a specific workout
  - PUT '/schedule/:id/edit' updates specific workout info
  - DELETE '/schedule/:id' deletes specific workout from db 

## Specs
- Technologies
  - HTML 
  - CSS 
  - Javascript
  - Postgres-SQL
  - Node.js
  - Express
  - Ejs
  - Heroku-postgres

- Modules
  - moment
  - express
  - express-session
  - morgan
  - nodemon
  - pg-promise
  - bcyrptjs
  - body-parser
  - cookie-parser
  - dotenv
  - ejs
  - method-override
  - passport
  - passport-local

## Future implementations 
  - calendar visual or integration with google calendar api
  - error pages for no user found 
  - implementing public posting sort of like a news feed where users can post what their doing. 
  - allowing users to upload a profile picture 
  
 
## Start Up and Walkthrough in dev environment 
- Github
  - Fork and clone this repo 
  - Create a new directory that is not already a git repo
  - In terminal type 'git clone ['this repo link'] where this repo link is the clink from the forked repo
  - In terminal cd into this repo and type PSQL 

- PSQL
  - While in terminal and psql already entered type 'CREATE DB DB_NAME' DB_NAME = file name in the .env file
  - type '\c DB_NAME' to get inside of the db 
  - type '\i db/migrations/ (4 migrations' to create the data tables 
- NPM
  - go back to the root directory of this repo and run 'npm install' from your terminal 
  - enter 'npm run dev'
- Browser
  - go to 'localhost:3000' in your browser and access the webpage
  

