const express = require('express');

const { getAllMovies, getMovieById} = require('../controllers/movies');

const router = express.Router();

router.route('/').get(getAllMovies);
router.route('/:id').get(getMovieById);

module.exports = router;