import express from "express"
import cors from 'cors'
import routes from './routes/router.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', routes)

app.listen('3001', ()=> {
    console.log('api is run http://localhost:3001 ')
})