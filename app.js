import express from "express"
import dotenv from "dotenv"
import userRoutes from "./routes/User.js";
dotenv.config();
const PORT = process.env.PORT || 6500;
const app = express();


// MIDDLEWARE


// ROUTES
app.use("/api",userRoutes)

// APP STARTUP
app.listen(PORT,()=>{
    console.log(`Enjoy your life at ${PORT}`)
})