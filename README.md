## Grown Folks Collective: Member Intake Portal
## Description
The Grown Folks Collective is a membership portal for professionals. This project demonstrates a full-stack JavaScript application that manages an exclusive intake process. It features a custom-styled landing page for applicants and a dynamic, server-rendered Admin Dashboard where membership data is processed and displayed in real-time.

## Built With
Node.js - The runtime environment.

Express.js - Used for the server framework and the .route() logic.

JavaScript (ES6) - Used for data manipulation, middleware logic, and the custom template engine.

HTML5 & CSS3 - A custom Navy and Gold professional theme built without external UI libraries.

## Key Features 
Full CRUD API:
 * POST: Captures applicant data and assigns unique IDs.

 * GET: Retrieves all applicants or filters them by industry.

 * PUT: Allows for updating applicant details or membership status.

 * DELETE: Provides a way to remove records from the local database.

Custom Middleware: 

* Logger: Tracks request methods and URLs in the terminal.

* Validator: Uses Regex to enforce a 000-000-0000 phone format and ensures all professional fields are filled.

* Global Error Handler: Catches all application errors and returns clean JSON messages.

Custom Template Engine: 

* Built a custom app.engine("html", ...) that uses the Node fs module to read the admin.html file and replace the #list# placeholder with dynamic data from the database.

## Reflection
A. What could you have done differently during the planning stages of your project to make the execution easier? 

Write you vision on paper for what you are trying to accomplish or do a wireframe, but also use the rubric when doing so, to ensure you have every step accounted for.

B. Were there any requirements that were difficult to implement? What do you think would make them easier to implement in future projects? 

I had to go back and update my middleware. I had to move my validator around in my code. At first I wasn't able to post with the original code. Trial and error, but I got it fixed.


C. What would you add to or change about your website if given more time? 

I have plans to add more questions to the intake form. I would like to know more about the person, to help me filter out information about them and help me to determine what types of events people want to attend.

D. Notes for my future self: 

Continue working on making sure ABT (always be testing). You can take your time and not try to rush the coding process. This will help you throughout to catch the error. Research when you're stuck. You're not the only one that has problems when coding. Always start your server after you commit, this will help you see errors faster when coding. 