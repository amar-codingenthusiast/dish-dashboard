# Dish Dashboard

Dish Dashboard is a web application that helps manage and display dish information in real-time. This project is an assignment for demonstrating a full-stack solution using the MERN stack with real-time updates.

## Introduction

Dish Dashboard is designed to manage a collection of dishes, displaying them with images, names and published or not published state. Users can toggle the publish status of each dish, with real-time updates reflected across all connected clients. The application is built using React for the frontend, Node.js and Express.js for the backend, and MongoDB for the database. Socket.IO is used for real-time updates, ensuring all clients are synchronized.

## Key Features

- Display a list of dishes with images, names and published or not published state.
- Toggle the publish status of dishes.
- Real-time updates using Socket.IO.
- Responsive design for various screen sizes.
- Backend API for managing dishes.
- Frontend hosted on GitHub Pages.
- Backend hosted on Glitch.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js and npm
- MongoDB

### Database Setup

1. Ensure MongoDB is running on your local machine.
2. Create a database named `DishesDB`.
3. Create a collection named `dishes`.
4. Change the MongoDB URL in db.js file inside server directory.

### Backend Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/amar-codingenthusiast/dish-dashboard.git
2. Change directory:
   ```sh
   cd dish-dashboard/server
3. Install dependencies:
   ```sh
   npm install
4. Run the backend server:
   ```sh
   nodemon index.js

### Frontend Setup

1. Navigate to the frontend directory:
   ```sh
   cd ../client
2. Install dependencies:
   ```sh
   npm install
3. Run the frontend server:
   ```sh
   npm start

### Running the Application

1. Open your browser and navigate to http://localhost:3000 to view the frontend.
2. Ensure the backend server is running on http://localhost:5000.

## Features

### Database Management
- MongoDB Atlas is utilized as the database to store user information and notes.

### Real-Time Updates with Socket.IO
- Socket.IO is integrated to provide real-time updates across all clients. When the publish status of a dish is toggled, the change is immediately broadcasted to all connected clients, keeping them in sync.

### Responsive Design
- The application features a responsive design, ensuring optimal user experience across various devices.

### Built with Modern Technologies
- Utilizes the MERN Stack (MongoDB, Express.js, React.js, Node.js) for robust and efficient development.
- Integration of React-Bootstrap for enhanced UI/UX and responsiveness to all devices.

## Built with
 - MERN Stack (MongoDB, Express.js, React.js, Node.js)
 - Socket.io
 - React-Bootstrap
 - Axios

## Deployment
 - Backend deployed on Glitch
 - Frontend deployed on GitHub Pages
 - Live version of iNoteBook app [here](https://amar-codingenthusiast.github.io/dish-dashboard)

## Contributing
 - Contributions are welcome! Here's how you can contribute:
 - Fork the repository
 - Create your feature branch (`git checkout -b feature/YourFeature`)
 - Commit your changes (`git commit -m 'Add some feature'`)
 - Push to the branch (`git push origin feature/YourFeature`)
 - Create a new Pull Request

## License
This project is licensed under the terms of the MIT license. You can find the [LICENSE](LICENSE) file in the root directory of the project.

## Tags
#MERN #Socket.io #Axios #Glitch #GitHub-Pages #React-Bootstrap #MongoDB-Atlas #Express.js #React.js #Node.js #Dish-Dashboard #Responsive-Design #Contributions #MIT-License
