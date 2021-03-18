const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
});

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'))
});

module.exports = router;

// const path = require('path');

// module.exports = (app) => {
//     app.get('/', (req, res) => {
//         res.sendFile(path.join(__dirname, '../public/index.html'));
//     });

//     app.get('/exercise', (req, res) => {
//         res.sendFile(path.join(__dirname, '../public/exercise.html'))
//     });

//     app.get('/stats', (req, res) => {
//         res.sendFile(path.join(__dirname, '../public/stats.html'))
//     });
// }
