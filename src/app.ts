
import express, { Request, Response } from 'express'
import { MovieRoutes } from './app/modules/movies/movie.router'
import cors from 'cors'
const app = express()

// parser 
app.use(express.json())
app.use(cors())

app.use('/api/v1/movies', MovieRoutes)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

export default app