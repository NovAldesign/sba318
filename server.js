// Imports
import express, { Router } from "express";


// Set Ups
const app = express();
const PORT = 3000;

// (Request) Middlewares
app.use(express.json()); //Parses the req body so we can use it


// Routes




// Read
app.get('/', (req, res) => {
    res.send('Hello from Express')
})

// Global Error Handling Middleware

// Listener
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
})