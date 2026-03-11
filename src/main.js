import express from 'express'
import userRouter from './routes/users.routes.js'
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
