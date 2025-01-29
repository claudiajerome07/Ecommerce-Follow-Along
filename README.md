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

## Milestone 13:

1. A new API endpoint to handle data updates in MongoDB.
2. Receives data via HTTP requests and updates the corresponding record in the database.
3. Adds an edit button to each product card.
4. Clicking the edit button opens a form pre-filled with the current product data.
5. Allows users to edit the form and save changes.


## Milestone 14:

1. A new API endpoint to handle deletion of a product from MongoDB.
2. Accepts the product ID as a parameter.
3. Adds a delete button to each product card.
4. Sends a request to the backend to delete the product when the delete button is clicked.

## Milestone 15:

1. Home: Links to the homepage of the application.
2. My Products: Links to the page displaying all the user's products.
3. Add Product: Links to the page where a new product can be added.
4. Cart: Links to the user's shopping cart.

## Milestone 16:

1. Product Display : 
    - View detailed product information, including name, price, and description.
    - Display images of the product.

## Milestone 17: 
1. Cart Schema

    - Define a schema that will store products in the cart. The schema should include fields such as:

        1. Product ID.
        2. Quantity.
        3. user Id.

2. API Endpoint

    - Endpoint: Add Product to Cart.

## Milestone 18:

1. Create an Endpoint to Receive Requests from the Cart Page
        
        - This endpoint will handle adding products to the cart or updating the quantity of existing products.

2. Create an Endpoint to Fetch All Products in the Cart for a User

        - This endpoint retrieves all cart items for a user based on their email address.

## Milestone 19:
1. Added Cart UI

        - The cart UI has been designed and implemented as part of the frontend functionality.

        - The cart page displays all products retrieved from the backend in a structured and user-friendly layout.

        - For each product, users can view the product name, price, and current quantity.
    
2. Fetched Cart Details of the User

        - The cart details for the logged-in user are fetched from the backend API.

        - This includes retrieving the list of products added to the user's cart, along with their respective quantities and prices.

## Milestone 20:

1. Backend Endpoint

    - Create an endpoint to fetch user data, including profile details and address information.

2. Frontend Profile Page

    - Display user profile information such as photo, name, and email.

    - Provide a separate section for address details with an option to add an address.

    - Display "No address found" if the user has no saved addresses.


## Milestone 21:

1. User Input: Collects address details such as Address Line 1, Address Line 2, City, Country, Zip Code, and Address Type (Home, Office, Other).


2. State Management: Utilizes useState to store the address data inputted by the user.

## Milestone 22:

1. Address Submission: Receives address data from the frontend (via HTTP POST request).


2. Database Storage: Adds the received address to an array inside the user collection in the database.


3. Address Array: Each user document will have an array of addresses, allowing multiple addresses to be stored per user.

## Milestone 23:

1. Place Order Button in Cart Page

    - Added a "Place Order" button inside the Cart Page.

    - When clicked, it navigates the user to the Select Address page to choose a delivery address.

2. Select Address Page

    - Displays all available addresses of the user.

    - Allows the user to select one address and proceed.

3. Backend API Endpoint to Fetch User Addresses

    - Provides a list of all addresses associated with a user.

    - Assumes authentication and user ID extraction from the request.

** thank you **

