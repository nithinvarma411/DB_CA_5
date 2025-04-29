import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';



dotenv.config();

const app = express();

app.use(express.json())

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected successfully");
    } catch (error) {
        console.error("error in mongodb", error);
    }
}

import userRouter from './routes.js'

app.use("/api", userRouter);


connectDB().then(
    () => {
        app.listen(4000, (req, res) => {
            console.log("app listening on port 4000");
        })
    }
).catch((err) => {
    console.error(err);
})