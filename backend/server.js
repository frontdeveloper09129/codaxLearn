import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import env from './config/env.js'
import authRoutes from "./routes/auth.routes.js"
import userData from "./routes/user.routes.js"
import QuizData from "./routes/quiz_data.routes.js"
import "./database/database.js"

const router = express.Router()

dotenv.config();

const app = express();

app.use(
    cors({
        origin: process.env.NODE_ENV === "production" ? "https://codaxLearn.com" : "http://localhost:5173",
        credentials: true
    })
);

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.json({
        message: "codaxLearn backend is running"
    });
});


app.use("/api/v1/auth", authRoutes)
app.use("/api/v2/userData", userData)
app.use("/api/v3/quiz/data", QuizData)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

