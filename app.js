const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/TourRoutes');
const userRouter = require('./routes/UserRoutes');

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());

app.use((req, res, next) => {
    console.log('Hello from middleware');
    next();
});

app.use('/api/v1/tours', tourRouter);

app.use('api/v1/users', userRouter);

module.exports = app;