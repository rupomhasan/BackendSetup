import express from 'express'
import { MovieController } from './movie.controller';

const router = express.Router()


router.post('/create-movie', MovieController.createMovie)

router.get('/', MovieController.getMovies)

// router.get('/:movieId', MovieController.getMovie)

router.get('/:slug', MovieController.getMovieBySlack)

export const MovieRoutes = router;