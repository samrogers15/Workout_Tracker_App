# Workout_Tracker_app
> This is a repository for an application that allows a user to enter information about their workouts and track previous workouts through the use of a database. The user can add in details specific to resistance or cardiovascular workouts, including duration, distance, reps, weights, etc. Information about these workouts is then added into a database that tracks all previous workouts. A user can then review information regarding the workouts they've completed over the course of the past 7 days through the use of a stat compiler.
 
## Table of contents
* [General Info](#general-info)
* [Technologies](#technologies)
* [Live Link](#Live-Link)
* [Code Snippet](#code-snippet)
* [Sources](#sources)
* [Contact](#contact)

## General Info
The database was initialized using MongoDB through execution of a seed file in the terminal. The application server was initialized using an Express router and the API routes include queries to the MongoDB database to display previous stats for the prior 7 days. The application is deployed to Heroku and the database has been connected to MongoDB Atlas.

## Technologies
* Javascript
* HTML/CSS
* JQuery
* Node
* NPM Express
* NPM MongoDB
* NPM Mongoose
* NPM Morgan
* Heroku
* MongoDB
* MongoDB Atlas
* MongoDB Compass

## Live Link
[Workout_Tracker_App](https://powerful-dawn-49801.herokuapp.com/)

## Code Snippets

The below example code shows an Express route that sets up the review of exercise stats for the prior 7 days:
```js
router.get('/api/workouts/range', async (req, res) => {
    try {
        const workoutRange = await Workout.aggregate([{
            $addFields: {
                totalDuration: { $sum: '$exercises.duration' },
            }
        }]).limit(7);
        res.json(workoutRange);
    } catch (err) {
        res.status(400);
        res.send(`Failed with: ${err}`);
    }
})
```

The below example code shows the Workout model setup in the MongoDB database:
```js
const WorkoutSchema = new Schema ({

    day: {
        type: Date,
        trim: true,
        required: true,
        default: Date.now
    },

    exercises: [{
        type: {
            type: String,
            trim: true,
            required: true,
            validate: [({ length }) => length <= 50, 'Type is too long, please shorten!']
        },
    
        name: {
            type: String,
            trim: true,
            required: true,
            validate: [({ length }) => length <= 50, 'Name is too long, please shorten!']
        },
    
        duration: {
            type: Number,
            trim: true,
            required: true,
            default: 0
        },

        distance: {
            type: Number,
            trim: true,
        },
    
        weight: {
            type: Number,
            trim: true,          
        },
    
        reps: {
            type: Number,
            trim: true,
        },
    
        sets: {
            type: Number,
            trim: true,
        }
    }],
})
```

## Sources
Application enabled using the following sources:

* [NPM Express](https://www.npmjs.com/package/express)
* [NPM MongoDB](https://www.npmjs.com/package/mongodb)
* [NPM Mongoose](https://www.npmjs.com/package/mongoose)
* [NPM Morgan](https://www.npmjs.com/package/morgan)

## Contact
Created by Sam Rogers - feel free to contact me to collaborate on this project or any other project!

[LinkedIn](https://www.linkedin.com/in/samuelerogers/)

[Portfolio](https://samrogers15.github.io/Current_Portfolio/index.html)