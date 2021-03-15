const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const htmlRoutes = require('./routes/html-routes');
const apiRoutes = require('./routes/api-routes');

const PORT = process.env.port || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Workoutdb', { useNewUrlParser: true });

mongoose.connection.on('error', (err) => console.log(`Error in Mongoose connection: ${err.message}.`));

mongoose.connection.once('open', () => {
    console.log('Mongoose connected!');
    app.listen(PORT, (err) => {
        console.log(`App running on port http://localhost/${PORT} !`);
    });
});