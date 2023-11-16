import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import 'dotenv/config';

const PORT = process.env.PORT; // Use process.env.PORT or default to 3000
const DB_URI = process.env.DB_URI;

console.log(DB_URI);

mongoose.connect(DB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
    console.log(error);
});

db.once("open", () => {
    console.log("Database connected");
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRoute);

app.listen(PORT, () => {
    console.log(`Server up and running on http://localhost:${PORT}`);
});
