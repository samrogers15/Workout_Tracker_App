const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const db = require('./models')
const htmlRoutes = require('./routes/html-routes');
const apiRoutes = require('./routes/api-routes');

const PORT = process.env.port || 3000;

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

require('./routes/html-routes')(app);
require('./routes/api-routes')(app);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', { useNewUrlParser: true });

mongoose.connection.on('error', (err) => console.log(`Error in Mongoose connection: ${err.message}.`));

mongoose.connection.once('open', () => {
    console.log('Mongoose connected!');
    app.listen(PORT, (err) => {
        console.log(`App running on port http://localhost/${PORT} !`);
    });
});