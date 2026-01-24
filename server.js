// Imports
import express from "express";


// Set Ups
const app = express();
const PORT = 3000;

// (Request) Middlewares

// Routes

// Global Error Handling Middleware

// Listener
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
})