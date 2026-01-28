// Imports
import express, { Router } from "express";
import db from "./database/database.js";
import applicantRoutes from "./routes/applicantRoutes.js";
import { logReq, globalErr } from ".//middleware/middleware.js";


// Set Ups
const app = express();
const PORT = 3000;

// (Request) Middlewares
app.use(express.json()); //Parses the req body so we can use it
app.use(logReq); // Runs for every single request


// Routes
// 1. Home Route
app.get("/", (req, res) => {
    // process.cwd() ensures the server finds the folder regardless of where you launch it
    res.sendFile(process.cwd() + "/public/index.html");
});

// 2. API Routes: 
app.use("/api/applicants", applicantRoutes);


// Global Error Handling Middleware
app.use(globalErr);

// Listener
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
})