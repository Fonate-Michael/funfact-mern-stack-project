# FunFact App

A MERN (MongoDB, Express, React, Node.js) stack application that serves fun facts from a MongoDB database.

## Features
- Fetches fun facts from a MongoDB collection
- Backend built with Express and Node.js
- Frontend developed using React
- Database managed with MongoDB
- CORS enabled for API communication

## Installation

### Prerequisites
Make sure you have the following installed:
- Node.js
- MongoDB (Compass or Atlas)
- Git

### Clone the Repository
```sh
git clone https://github.com/your-username/funfact-app.git
cd funfact-app
```

### Install Dependencies
Navigate to the backend directory and install dependencies:
```sh
cd backend
npm install express mongoose cors dotenv
```
Navigate to the frontend directory and install dependencies:
```sh
cd ../frontend
npm install react axios
```

## Database Setup
1. Open MongoDB Compass.
2. Create a new database named `Funfact`.
3. Create a collection named `fun`.
4. Import the JSON data in the Backend folder (data.json) into the `fun` collection.

## Running the Application

### Start the Backend Server
```sh
cd backend
node App.js
```

### Start the Frontend Server
```sh
cd ../frontend
npm start
```

## API Endpoints
- `GET /api/facts` - Fetch all fun facts

## Contribution
Feel free to fork this repository and submit pull requests.

## License
This project is open-source under the MIT License.

---
Enjoy the fun facts! 🎉

