import express from 'express'
import connectDB from "./backend/config/db.js";
import dotenv  from 'dotenv'
import userRoutes from "./backend/routes/userRoute.js";
const app = express()


connectDB()
dotenv.config()

app.use("/api/users",userRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))