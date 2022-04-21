import express from "express";
import dotenv from "dotenv"
import wordRoute from "./routes/wordsRoute.js"
import connectDB from "./config/db.js"

dotenv.config()

connectDB();

const app = express();
const PORT = process.env.PORT || 5000

//Middlewares
app.use(express.json());
app.use('/api/words/', wordRoute);


app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));