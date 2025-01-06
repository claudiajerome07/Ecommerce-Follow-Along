# Ecommerce Application

## Milestone 1: Project Overview

1. User Authentication: Registration and Log in process.
2. Product page: Display of all the porducts in the page.
3. Order page: Show the order details for each product
4. Payment gateway: payment process page for the ordered products.

## Milestone 2:

1. Frontend setup:
Began by setting up these tools for frontend:
    1. tailwind css
        => used npm install -D tailwindcss
        => Implementing login page using tailwind css.
    2. React 
        => used npm create vite@latest frontend


2. Backend setup:
Began by installing these packages and initialising project:
    1. Project initialising:
        => npm init or npm init -y
        => the above command installed package.json file to manages dependencies.
    2. Packages to be installed:
        => express
            • used npm i express
        => mongoose
            • used npm i mongoose
        => cors
            • used npm i cors
        => nodemon
            • used npm i nodemon

## Milestone 3:
1. Setting up the Node.js server and handling API requests.
    Use Node.js with the Express framework to create a server for handling incoming API requests.

2. Connecting your application to MongoDB.
    MongoDB is used as the database to store and manage application data.

3. Establishing communication between the database and the server.
    Created file named database.js to establish a connection between the application and the MongoDB database.

4. Implementing an Error Handler.
    Set up middleware to handle errors across the application by creating file named ErrorHandler.

## Milestone 4:
1. Creating the User Model:
    1. Created a schema for users in the database using Mongoose.
    2. Included essential fields such as name, email, password, and any other relevant details for user management.

2. Setting up Controllers for User-Related Operations:
    1. Created Example endpoints which includes creating a user, fetching user details, updating user information, and deleting a user.
    2. Controllers will act as a bridge between routes and the database, ensuring clean and organized code

3. Enabling File Uploads Using Multer
    1. Used Multer, a middleware for handling multipart data, to enable file uploads in the application.
    2. Configured it to upload files like user profile pictures or other assets, ensuring proper storage and file validation.
    3. Handled potential errors, such as invalid file types or upload size limits, for a smooth user experience.


## Milestone 5: 
1. Created a SignUp page:
    1. created a SignupForm component to handle user regestration.
    2. The page includes input field to collect user details such as name,password, email and file upload.
    3. This signup page styled using tailwind css.

2. Created a validation page:
    1. created a separate component to validate user input.
    2. Implemented form validation using Regex to ensure proper data entry and point out errors.

3. Setted up react-router for the exisiting app:
    1. Implemented React Router into the application to enable navigation between pages.
    2. Configured routes for the SignUp and Validation pages.

## Milstone 6:
1. Generate a JWT Token at Signup:
    1. Install the jsonwebtoken library.
2. Create a Verification Link

    1. Generate a verification link containing the token.
3. Configure Nodemailer to Send Emails

    1. Install Nodemailer.
    2. Use the sendVerificationEmail function to send the verification link to the user's email address.

4. Create an Endpoint to Verify the Token

    1. Endpoint to verify the token and activate the user.


## Milestone 7:
1. Signup:
    1. Check for Existing User:
        - If the user is already in the database, return a message prompting for direct login.
    2. User Creation:
        - If not present, hash the password using bcrypt.js.
        - Create a new user and store the name, email, and password in the database.

2. Login:
    1. Validation:
        - Check if the user exists in the database and validate the password.
        - If valid, create a token and send it as cookies.
        - If invalid, return a message prompting the user to sign up first.


## Milestone 8:

1. Create the Card Component
    1. Build a reusable card component.
    2. Accept props for product details such as:
        - Name
        - Image
        - Price

2. Design the Homepage Layout
    1. Implement a grid or flexbox layout.
    2. Arrange multiple cards neatly for an aesthetically pleasing homepage display.

## Milestone 9:

1. Design and implement the product form.

2. Enable functionality to accept multiple product images.

3. Save the form data to the database.

4. Display the saved product details on the product home page.

## Milestone 10:

1. Product Schema:

    1. Define the structure of product data (e.g., name, description, price, image URL) using Mongoose.

    2. Ensure each field has proper validation (e.g., required fields, correct data types).

2. Endpoint Creation:

    1. Build a POST endpoint to receive product data.

    2. Validate and save the product details to MongoDB.

## Milestone 11

1. Create a GET endpoint in the backend server that connects to the database, retrieves the required data (e.g., products), and sends it as a response to the client in JSON format.

2. Connect to the database.

3. Write a query to fetch the desired data from the database.

4. Handle any potential errors during the database operation gracefully.

5. Structure the response data and send it to the client using res.json().

## Milestone 12:

1. Create an endpoint that retrieves all products along with the user's email and sends it as a JSON response to the frontend.

2. Connect to the database to fetch product data.

3. Use axios or fetch to call the API.

4. Store the response (products and user email) in the state.

5. Display the products dynamically using the ProductCard component.

** thsnk you **
~