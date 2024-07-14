import express from 'express'
import { MovieController } from './movie.controller';
import { ReviewControllers } from '../reviews/review.controller';
import { Review } from '../reviews/review.model';
import validateRequest from '../../Middleware/validateRequest';
import { movieValidationSchema } from './movie.validation';

const router = express.Router()


router.post('/create-movie', validateRequest(movieValidationSchema), MovieController.createMovie)

router.get('/', MovieController.getMovies)

router.get('/:movieId', MovieController.getMovieById)


// review 
/* 
router.get('/:slug/reviews', async function (req, res) {

    console.log("fetching______")

    // const result = await Review.find({})


    // res.status(200).json({
    //     success: true,
    //     message: 'fetched reviews ',
    //     data: { result: null }
    // })


})
 */

router.get('/:slug/reviews', ReviewControllers.getSpecificMovieReviews)



router.get('/:id/review', ReviewControllers.getSpecificReviewOfMovie)

router.post('/:slug/review', ReviewControllers.addReview)


export const MovieRoutes = router;