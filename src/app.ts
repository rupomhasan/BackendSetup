
import express, { Request, Response } from 'express'
import { MovieRoutes } from './app/modules/movies/movie.router'
import cors from 'cors'
import notFound from './app/Middleware/notFoundRoute'
import globalErrorHandler from './app/Middleware/globalErrorHandler'
import { router } from './app/Routes'
const app = express()

// parser 
app.use(express.json())
app.use(cors())
app.use("/api/v1", router)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.use(globalErrorHandler)
app.use(notFound)

export default app