// 1. Logging Middleware 
export function logReq(req, res, next) {
    // (GET/POST)
    console.log(`${req.method} - ${req.url}`);

    // shows data in the body if applicant submitted form
    if (req.body && Object.keys(req.body).length > 0) {
        console.log(`Req Data:`, req.body);
    }

    next(); // Goes to the next function in our stack
}

// 2. Custom Validation Middleware: verifies if application is complete
export function validateIntake(req, res, next) {

    //  Checks to see if req.body isn't empty so the server doesn't crash
    if (!req.body || Object.keys(req.body).length === 0) {
        const error = new Error("No data received. Please fill out the form.");
        error.status = 400;
        return next(error);
    }

    const { name, email, phone, industry, hopes, contribution } = req.body;

    // Check for missing fields on application
    if (!name || !email || !phone || !industry || !hopes || !contribution) {
        const error = new Error("Membership requires a complete profile. Please fill out all fields.");
        error.status = 400; // Client error
        return next(error);
    }

    // Practical Regex - Ensuring the phone number is professional
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
        const error = new Error("Invalid format. Please use 000-000-0000 for your contact number.");
        error.status = 400;
        return next(error);
    }

    next(); // All checks passed. It takes you to the next router.
}

// 3. Global Error Handling Middleware 
export function globalErr(err, req, res, next) {
    // Log error to the console
    console.log(`Server Error: ${err.message}`);

    // Return JSON 
    res.status(err.status || 500).json({
        success: false,
        error: err.message
    });
}