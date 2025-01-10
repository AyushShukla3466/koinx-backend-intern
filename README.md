# KoinX Backend Internship Assignment

This repository contains the backend code for the KoinX Backend Internship assignment. The backend application fetches cryptocurrency data for Bitcoin, Matic, and Ethereum every 2 hours and provides APIs to retrieve this data as well as calculate the price deviation.

## Prerequisites

- Node.js (v20.10.0 or higher)
- MongoDB (Local or MongoDB Atlas for cloud hosting)
- Postman or any API testing tool for testing the API endpoints

## Setup Instructions

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/ayushshukla3466/koinx-backend-intern.git
cd koinx-backend-intern
```

### 2. Install Dependencies

Run the following command to install all the necessary dependencies:

```bash
npm install
```

### 3. Setup Environment Variables

Create a .env file in the root directory and add the following environment variables:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
```
Replace your_mongodb_connection_string with your actual MongoDB URI from MongoDB Atlas or your local MongoDB instance.
