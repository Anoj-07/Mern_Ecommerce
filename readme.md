# 🛍️ E-Commerce Clothing Website

An online clothing store built with **React Vite** for the frontend, **Express.js** for the backend, and **Razorpay** as the payment gateway. The platform ensures a secure and seamless shopping experience with top brands, exclusive offers, and a user-friendly interface.

## 📌 Features

- **User Authentication:** Secure login & signup with JWT authentication  
- **Product Listings:** Browse a wide range of clothing items with categories and filters  
- **Shopping Cart & Wishlist:** Add items to cart and save favorites  
- **Secure Payments:** Razorpay integration for smooth and safe transactions  
- **Order Management:** Track orders, order history, and invoices  
- **Admin Dashboard:** Manage products, orders, and users efficiently  
- **Offers & Discounts:** Avail seasonal sales, promo codes, and flash deals  
- **Responsive Design:** Mobile-friendly UI for seamless shopping  
- **Fast & Scalable:** Optimized performance with Vite and Express.js  

## 🛠️ Tech Stack

### Frontend (React Vite)
- React.js (with Vite)
- React Router
- Redux Toolkit (for state management)
- Tailwind CSS / Material UI (for styling)
- Axios (for API requests)

### Backend (Express.js)
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT (for authentication)
- Bcrypt.js (for password hashing)

### Payment Integration
- Razorpay Payment Gateway

## 🚀 Installation & Setup

### Prerequisites:
- Node.js (>=14)
- MongoDB (running locally or via Atlas)
- Razorpay account for payment integration

### Clone the Repository
```bash
git clone https://github.com/Anoj-07/Mern_Ecommerce
cd Mern_Ecommerce
```

### Install Dependencies
```bash
# Install backend dependencies
cd Ecommerce_Backend
npm install

# Install frontend dependencies
cd ../Ecommerce_frontend
npm install
```

### Run the Application
```bash
# Start backend server
cd backend
npm start

# In a new terminal, start frontend development server
cd frontend
npm run dev
```

## 🔒 Security & Best Practices

- JWT Authentication with Bcrypt Password Hashing
- CORS Handling for Secure API Requests
- Razorpay Sandbox for Test Transactions
- Data Validation & Sanitization
- Error Handling & Logging

## 📁 Project Structure

```
ecommerce-website/
│
├── Ecommerce_Frontend/               # React Vite Frontend
│   ├── public/             # Public assets
│   ├── src/
│   │   ├── assets/         # Images, fonts, etc.
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── redux/          # Redux store and slices
│   │   ├── services/       # API service functions
│   │   ├── utils/          # Utility functions
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # Entry point
│   ├── index.html          # HTML template
│   └── vite.config.js      # Vite configuration
│
└── Ecommerce_Backend/                # Express.js Backend
    ├── config/             # Configuration files
    ├── controllers/        # Route controllers
    ├── middleware/         # Custom middleware
    ├── models/             # MongoDB schemas
    ├── routes/             # API routes
    ├── utils/              # Utility functions
    ├── .env                # Environment variables
    └── server.js           # Entry point
```

## 🏆 Future Enhancements

- AI-powered product recommendations
- Real-time chat support
- Multi-currency support
- Progressive Web App (PWA) implementation
- Advanced analytics dashboard
- Integration with multiple payment gateways

## 👨‍💻 Contributors

- Your Name - Anoj Rawal

## 📜 License

This project is licensed under the MIT License.

## 📞 Contact

- 📧 Email: anojrawal03.adtu@gmail.com

---

Enjoy shopping with us! 🛒✨
