💸 CashManager – Digital Wallet Application
CashManager is a secure, full-stack digital wallet application that enables users to register, manage their accounts, and perform real-time money transfers. Built with modern web technologies and a security-first architecture, this project demonstrates:

Robust authentication

API validation

Thorough testing workflows

🚀 Features
👤 User Management
Secure JWT-based registration and login

Profile management with user info update

Input validation using Zod schema

Password hashing with bcrypt + salting

💼 Account Management
Auto-provisioned wallet for each user

Real-time balance inquiry

Randomized initial balance (₹1 – ₹10,000)

💸 Money Transfers
Peer-to-peer transfers with authorization

ACID-compliant transaction processing

Balance checks and error handling

Protection from invalid/insufficient transactions

🔐 Security Highlights
JWT authentication and authorization

Encrypted password storage using bcrypt

Input schema enforcement with Zod

Rate limiting on sensitive endpoints

CORS protection and secure HTTP headers via Helmet

🧪 Testing & CI/CD
Jest unit tests for middleware and logic

Mocked JWT and in-memory MongoDB for testing

GitHub Actions for CI/CD automation

Test coverage enforcement (target: 80%+)

🛠️ Tech Stack
🔹 Backend
Node.js, Express.js

MongoDB with Mongoose

Libraries: JWT, Bcrypt, Zod, Helmet, CORS, Express-Rate-Limit

Testing: Jest

🔹 Frontend
React.js with Vite

React Router, Context API

Tailwind CSS, Axios, ESLint
