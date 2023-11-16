import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import 'dotenv/config';

const PORT = process.env.PORT;
const USERNAME = process.env.USERNAME
const PASSWORD = process.env.PASSWORD

const app = express()
mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.tj7dd9n.mongodb.net/?retryWrites=true&w=majority`, {
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

app.use(cors());
app.use(express.json());
app.use(userRoute);

app.listen(PORT, () => {
    console.log(`Server up and running on http://localhost:${PORT}`);
});
