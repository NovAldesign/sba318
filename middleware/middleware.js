// 1. Logging Middleware 
export function logReq(req, res, next) {
    console.log(`${req.method} - ${req.url}`);

    if (req.body && Object.keys(req.body).length > 0) {
        console.log(`Req Data:`, req.body);
    }

    next();
}

// 2. Custom Validation Middleware 
export function validateIntake(req, res, next) {
    const { name, email, phone, industry, hopes, contribution } = req.body;

    // Check for missing professional fields
    if (!name || !email || !phone || !industry || !hopes || !contribution) {
        const error = new Error("Membership requires a complete profile. Please fill out all fields.");
        error.status = 400;
        return next(error);
    }

    // Practical Regex - Ensuring the phone number is professional
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
        const error = new Error("Invalid format. Please use 000-000-0000 for your contact number.");
        error.status = 400;
        return next(error);
    }

    next();
}

// 3. Global Error Handling Middleware 
export function globalErr(err, req, res, next) {
    console.log(`Server Error: ${err.message}`);
    
    // Return JSON 
    res.status(err.status || 500).json({ 
        success: false, 
        error: err.message 
    });
}