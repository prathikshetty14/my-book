
# Book Matching App

## About the Project

The Book Matching App is designed to help users discover books based on their preferences. Users can answer a set of questions, and the app will provide book recommendations tailored to their responses.

Project created as a Coding Challenge for Reach Best Company.


## Table of Contents
1. [About the Project](#about-the-project)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
5. [Usage](#usage)
6. [Author](#author)

## Features

- Dynamic Form: Users can interact with a dynamic form to answer questions.
- Book Recommendations: The app provides personalized book recommendations based on user responses.

## Tech Stack

- Frontend: React.js, Tailwind
- Backend: Node.js, Express.js
- Database: MongoDB
- Deployment: Vercel

## Getting Started

### Prerequisites

Make sure you have the following software installed:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:

```bash
git clone https://github.com/prathikshetty14/my-book
```

2. Install dependencies:

```bash
cd backend
npm install
```

```bash
cd frontend
npm install
```

### Usage

1. Backend Configuration:

   - Create an `.env` file in the `backend` folder.
   - Add the following configuration:

     ```env
     PORT=3001   # Choose a suitable port
     MONGODB_URI=mongodb+srv://<username>:<password>@your-cluster.mongodb.net/your-database-name
     ```

     Replace `<username>`, `<password>`, and `your-database-name` with your MongoDB Atlas credentials.

2. Start the backend server:

   ```bash
   cd backend
   npm start
   ```

3. Start the frontend development server:

   ```bash
   cd frontend
   npm start
   ```
Ensure to change the fetch link in the frontend based on the port used for backend.

## Author

This project was created by *Prathik Shetty* - **Full Stack Developer**

You can reach out to me at [prathikshetty1411@gmail.com] for any contribuitions.
