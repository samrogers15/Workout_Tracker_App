const Workout = require('../models/workoutModel')
const router = require('express').Router();

module.exports = (app) => {
    app.get('/api/workouts', (req, res) => {
        Workout.find({})
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json(err)
        })
    });

    app.post('/api/workouts', (req, res) => {
        Workout.create({})
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json(err)
        })
    });

    app.put('/api/workouts/:id', ({body, params}, res) => {
        Workout.findByIdAndUpdate(
            params.id,
            { $push: {exercises: body} },
            { new: true }
        )
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json(err)
        })
    });

    app.get('/api/workouts/range', (req, res) => {
        Workout.find({}).limit(5)
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json(err)
        })
    });
}

// router.get('/api/workouts', async (req, res) => {
//     try {
//         const allWorkouts = await Workout.find();
//         res.json(allWorkouts);
//     } catch (err) {
//         res.status(400);
//         res.send(`Failed with: ${err}`);
//     }
// });

// router.post('/api/workouts', async (req, res) => {
//     try {
//         const newWorkout = await Workout.create({});
//         res.json(newWorkout);
//         res.status(201)
//     } catch (err) {
//         res.status(400);
//         res.send(`Failed with: ${err}`);
//     }
// })

// router.put('/api/workouts/:id', async (req, res) => {
//     try {
//         const updatedWorkout = await res.Workout.findByIdAndUpdate(
//             req.params.id,
//             {$push: {
//                 exercises: req.body
//             }}
//         );
//         res.json(updatedWorkout);
//     } catch (err) {
//         res.status(400);
//         res.send(`Failed with: ${err}`);
//     }
// })

// router.get('/api/workouts/range', async (req, res) => {
//     try {
//         const workoutRange = await Workout.find().limit(5);
//         res.json(workoutRange);
//     } catch (err) {
//         res.status(400);
//         res.send(`Failed with: ${err}`);
//     }
// })

module.exports = router;