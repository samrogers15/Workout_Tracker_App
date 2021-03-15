const Workout = require('../models/workoutModel')
const router = require('express').Router();

router.get('/api/workouts', async (req, res) => {
    try {
        const allWorkouts = await Workout.find();
        res.json(allWorkouts);
    } catch (err) {
        res.status(400);
        res.send(`Failed with: ${err}`);
    }
});

router.post('/api/workouts', async (req, res) => {
    try {
        const newWorkout = await Workout.create({});
        res.json(newWorkout);
        res.status(201)
    } catch (err) {
        res.status(400);
        res.send(`Failed with: ${err}`);
    }
})

router.put('/api/workouts/:id', async (req, res) => {
    try {
        const updatedWorkout = await res.Workout.findByIdAndUpdate(
            req.params.id,
            {$push: {
                exercises: req.body
            }}
        );
        res.json(updatedWorkout);
    } catch (err) {
        res.status(400);
        res.send(`Failed with: ${err}`);
    }
})

router.get('/api/workouts/range', async (req, res) => {
    try {
        const workoutRange = await Workout.find().limit(5);
        res.json(workoutRange);
    } catch (err) {
        res.status(400);
        res.send(`Failed with: ${err}`);
    }
})

module.exports = router;