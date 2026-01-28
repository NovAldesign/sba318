// Imports
import express, { Router } from "express";
import { logReq, globalErr } from ".//middleware/middleware.js";


// Set Ups
const app = express();
const PORT = 3000;

// (Request) Middlewares
app.use(express.json()); //Parses the req body so we can use it
app.use(logReq); // Runs for every single request


// Routes
//Post: Create new applicant




// Read



// Global Error Handling Middleware
app.use(globalErr);

// Listener
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
})