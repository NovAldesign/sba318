// Imports
import express, { Router } from "express";
import fs from "fs";
import db from "./database/database.js";
import applicantRoutes from "./routes/applicantRoutes.js";
import { logReq, globalErr } from ".//middleware/middleware.js";


// Set Ups
const app = express();
const PORT = 3000;

// (Request) Middlewares
app.use(express.json()); //Parses the req body so we can use it
app.use(express.urlencoded({ extended: true }));
app.use(logReq); // Runs for every single request

// Static Files (Navy/Gold CSS)
app.use(express.static("./public"));

//  Custom View Engine (Template Engine) 
app.engine("html", (filePath, options, cb) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return cb(err);

    // Filter for applicants category only
    const applicants = db.filter(item => item.category === "applicants");

    // Builds the list items for the dashboard
    let listItems = "";
    for (let person of applicants) {
      listItems += `
        <li style="border-left: 4px solid #C5A059; background: rgba(255,255,255,0.05); padding: 15px; margin-bottom: 10px; list-style: none;">
          <strong style="color: #C5A059; font-size: 1.1rem;">${person.name}</strong><br>
          <span style="color: #fff;">${person.industry} | ${person.tier}</span><br>
          <small style="color: #bbb;">Status: ${person.status}</small>
        </li>`;
    }

    // This replaces the #list# tag in admin.html with our dynamic list
    const rendered = content.toString().replace("#list#", listItems);
    return cb(null, rendered);
  });
});

app.set("views", "./views");
app.set("view engine", "html");


// Routes
// 1. Intake Form Route
app.get("/", (req, res) => {
    // process.cwd() ensures the server finds the folder regardless of where you launch it
    res.sendFile(process.cwd() + "/public/index.html");
});

// Admin Dashboard (Rendered using our Template Engine)
app.get("/admin", (req, res) => {
    res.render("admin"); 
});

// 2. API Routes: 
app.use("/api/applicants", applicantRoutes);


// Global Error Handling Middleware
app.use(globalErr);

// Listener
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
})