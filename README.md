# GreenPocket

GreenPocket is a personal finance management web application created for the CSCI-321 Software Development II course. The project helps users build budgets, track their income and expenses, and visualize spending. It also integrates with bank accounts so transactions and balances can be pulled automatically.

The final production version of the React application lives in the **Production** directory and the Express/MongoDB backend is in **Server**.

## Technologies

### Frontend
- **React** with React Router for navigation
- **React‑Bootstrap** for styling and layout
- **Recharts** for data visualization
- **FontAwesome** icons
- **Axios** for HTTP requests
- **react-plaid-link** to connect to Plaid

### Backend
- **Node.js** and **Express**
- **MongoDB** accessed via **Mongoose**
- **bcrypt** for password hashing

### APIs
- **Plaid API** – used to securely link bank accounts and retrieve account balances and transactions

## Running the project
1. Start the backend:
   ```bash
   cd Server
   npm install
   node server.js
   ```
   The server listens on port 9999.

2. Launch the React frontend:
   ```bash
   cd ../Production
   npm install
   npm start
   ```
   Visit `http://localhost:3000` to use the app.

## Features
- Create budgets and categorize spending
- Keep track of income and expenses
- Connect bank accounts via Plaid
- View balances and transactions
- Visualize spending with charts
- Receive optional notifications via email or text

