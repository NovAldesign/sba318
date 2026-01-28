import express from "express";
import db from "../database/database.js";
import { validateIntake } from "../middleware/middleware.js"; 

const router = express.Router();

// Logic for the base path: /api/applicants
router
  .route("/")
  // CREATE: Membership Intake
  .post(validateIntake, (req, res) => {
    // Extraction of the fields
    let { name, email, phone, industry, hopes, contribution, tier } = req.body;

    // validateIntake checked 
    let id;
    if (db.length === 0) {
      id = 1;
    } else {
      id = db[db.length - 1].id + 1;
    }

    let newApplicant = {
      id: id,
      category: "applicants", 
      name,
      email,
      phone,
      industry,
      hopes,
      contribution,
      tier,
      status: "pending",
      submittedAt: new Date().toISOString()
    };

    db.push(newApplicant);
    
    // Sending confirmation as JSON
    res.status(201).json({ 
        success: true, 
        message: `Thank you, ${name}. Your application for ${tier} is being viewed. We will notify you in 72 hours.` 
    });
  })
  // READ: Get all applicants
  .get((req, res) => {
    // Only return the applicants category
    let applicantsOnly = db.filter(item => item.category === "applicants");
    res.json(applicantsOnly);
  });

// Logic for specific IDs: /api/applicants/:id
router
  .route("/:id")
  // UPDATE: Change membership status from Pending to Accepted
  .put((req, res) => {
    let id = req.params.id;

    let updatedApplicant = db.find((person) => {
      if (person.id == id) {
        for (let key in req.body) {
          person[key] = req.body[key];
        }
        return true;
      }
    });

    if (updatedApplicant) {
      res.json({ updatedApplicant });
    } else {
      res.status(404).json({ error: "Could not find applicant!" });
    }
  })
  // DELETE: Remove an application record
  .delete((req, res) => {
    let id = req.params.id;

    let deletedIndex = db.findIndex((person) => person.id == id);

    if (deletedIndex !== -1) {
      let removed = db.splice(deletedIndex, 1);
      res.json({ message: "Record removed", removed });
    } else {
      res.status(404).json({ error: "Could not find applicant!" });
    }
  });

// FILTER ROUTE: /api/applicants/:ind/industry
router.route("/:ind/industry").get((req, res) => {
  let industry = req.params.ind;

  let filteredData = db.filter((person) => 
    person.category === "applicants" && 
    person.industry.toLowerCase() === industry.toLowerCase()
  );

  res.json({ filteredData });
});

export default router;