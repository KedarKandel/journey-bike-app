

## Bike Journeys Visualiser Application

 This is a web application that allows users to visualise helsinki city bikes journeys,  stations and their detail information. The frontend is built using React, TypeScript, and Tailwind CSS, while the backend is built using Node.js, Express, and Postgres.

# Getting Started: 

To get started with this application, follow these steps:

 Clone the repository into your local machine: In your terminal write or paste this command "git clone  https://github.com/KedarKandel/journey-bike-app.git" and cd to journey-bike-app. You will have frontend and backend directories inside the journey-bike-app directory.

 In order to run this project on your local machine it should have node installed. 
 
 1. To check node, in your terminal type: node --version.
 2. To check posrgres, in your terminal type: postgres --version


 Head over to this webside to install node: https://nodejs.org/en/download
                        -install postgreSQL: https://www.postgresql.org/download/


# Backend:
1. cd backend
2. Install all the required dependencies for the backend: npm install
3.  Create a PostgreSQL database and configure the database connection in the .env file.(refer to my application letter)
4. Start the backend server: npm run dev

 node express app will be running at port 3001.

# Frontend:
1. cd frontend
2. Install all the required dependencies for the frontend: npm install
3. Start the frontend development server: npm start
4.  React application will be running at port 3000.

The frontend of the application fetches the api data using axios library


The backend server will run on http://localhost:3001, while the frontend development server will run on http://localhost:3000.

# Features
1. View all journeys with pagination
2. View details of a specific journey by ID
3. View all stations
4. View specific station with detailed information.

# endpoints used

1. GET /journeys/all: Returns all journeys with pagination.

2. GET /journeys/:id: Returns details of a specific journey.

3. GET /stations/all: Returns all stations with pagination.

4. GET /stations/:id: Returns details of a specific station.

The API is implemented using Node.js, Express, and PostgreSQL, and is tested using Jest.


# Testing
To run tests for the backend, cd to backend, use the following command: npm run test. This will run all tests in the tests directory.

License
This application is created by Kedar Kandel.