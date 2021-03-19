const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');

const PORT = process.env.PORT || 8080;

const db = require('./models');
const htmlRoutes = require('./routes/html-routes');
const apiRoutes = require('./routes/api-routes');

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(logger('tiny'));
app.use(logger('dev'));

app.use(htmlRoutes);
app.use(apiRoutes);

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

mongoose.connection.on('error', (err) => console.log(`Error in Mongoose connection: ${err.message}.`));

mongoose.connection.once('open', () => {
    console.log('Mongoose connected!');
    app.listen(PORT, (err) => {
        console.log(`App running on port http://localhost/${PORT} !`);
    });
});