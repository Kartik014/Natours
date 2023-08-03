const express = require('express');
const tourController = require('./../controllers/tourController');

const tourRouter = express.Router();

// tourRouter.param('id', tourController.CheckId)

tourRouter
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.createTour)

tourRouter
    .route('/:id')
    .get(tourController.getTour)
    .delete(tourController.deleteTour)
    .patch(tourController.updateTour)

module.exports = tourRouter