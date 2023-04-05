const fs = require('fs');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

// Read JSON file
const movies = JSON.parse(fs.readFileSync(`${__dirname}/../_data/data.json`,'utf-8'));

// @desc Get all Movies
// @routes GET /api/v1/movies
// @access Public
exports.getAllMovies = asyncHandler( async (req, res, next) => {

    res.status(200).json({
        success: true,
        data: movies
    });
});


// @desc Get a single Movie
// @routes GET /api/v1/movies/:id
// @access Public
exports.getMovieById = asyncHandler( async (req, res, next) => {
     
    const movie = await movies.results.find(movie => movie.episode_id == req.params.id);

    if(!movie || movie == '') {
        return next(new ErrorResponse(`Movie not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true,
        data: movie
    });
});