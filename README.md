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
    1. Define a schema for users in the database using Mongoose.
    2. Include essential fields such as name, email, password, and any other relevant details for user management.

2. Setting up Controllers for User-Related Operations:
    1. Example endpoints may include creating a user, fetching user details, updating user information, and deleting a user.
    2. Controllers will act as a bridge between routes and the database, ensuring clean and organized code

3. Enabling File Uploads Using Multer
    1. Use Multer, a middleware for handling multipart data, to enable file uploads in the application.
    2. Configure it to upload files like user profile pictures or other assets, ensuring proper storage and file validation.
    3. Handle potential errors, such as invalid file types or upload size limits, for a smooth user experience.


Happy coding ❤️.