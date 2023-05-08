

## Bike Journeys Visualiser Application

 This is a web application that allows users to visualise helsinki city bikes journeys,  stations and their detail information. The frontend is built using React, TypeScript, and Tailwind CSS, while the backend is built using Node.js, Express, and Postgres.

Getting Started: 

To get started with this application, follow these steps:

# Clone the repository into your local machine: In your terminal write or paste this command "git clone  https://github.com/KedarKandel/journey-bike-app.git" and cd to journey-bike-app


Backend:
# cd backend
# Install all the required dependencies for the backend: npm install
# Create a PostgreSQL database and configure the database connection in the .env file.(refer to my application letter)
# Start the backend server: npm run dev
# node express app will be running at port 3001.

Frontend:
# cd frontend
# Install all the required dependencies for the frontend: npm install
# Start the frontend development server: npm start
# React application will be running at port 3000.
The frontend of the application fetches the api data using axios library


The backend server will run on http://localhost:3001, while the frontend development server will run on http://localhost:3000.

# Features
1. View all journeys with pagination
2. View details of a specific journey by ID
3. View all stations
4. View specific station with detailed information.

GET /journeys/all: Returns all journeys with pagination.
GET /journeys/:id: Returns details of a specific journey by ID.
GET /journeys/all: Returns all journeys with pagination.
GET /journeys/:id: Returns details of a specific journey by ID.

The API is implemented using Node.js, Express, and PostgreSQL, and is tested using Jest.


# Testing
To run tests for the backend, cd to backend, use the following command: npm run test. This will run all tests in the tests directory.

License
This application is created by Kedar Kandel.