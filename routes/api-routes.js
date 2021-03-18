const router = require('express').Router();
const Workout = require('../models/workoutModel');

router.get('/api/workouts', async (req, res) => {
    try {
        const workouts = await Workout.aggregate([{
            $addFields: {
                totalDuration: { $sum: '$exercises.duration' },
            }
        }])
        res.json(workouts);
    } catch (err) {
        res.status(400);
        res.send(`Failed with: ${err}`);
    }
});

router.post('/api/workouts', async (req, res) => {
    try {
        const newWorkout = await Workout.create(req.body);
        res.json(newWorkout);
        res.status(201)
    } catch (err) {
        res.status(400);
        res.send(`Failed with: ${err}`);
    }
})

router.put('/api/workouts/:id', async (req, res) => {
    try {
        await Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true }
        ).then((workout) => {
            res.json(workout);
        });
    } catch (err) {
        res.status(400);
        res.send(`Failed with: ${err}`);
    }
})

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

module.exports = router;