import express from "express";
import {  placeOrder,
    placeOrderStripe,
    placeOrderRazorpay,
    allOrders,
    userOrders,
    updateStatus } from "../controllers/orderController.js";
import  adminAuth  from "../middleware/AdminAuth.js";
import auth from "../middleware/Auth.js";

const orderRouter = express.Router();


// Admin Routes
orderRouter.post("/list",adminAuth ,allOrders)
orderRouter.post("/status",adminAuth , updateStatus)

//payment User Routes
orderRouter.post("/place",auth, placeOrder)
orderRouter.post("/stripe",auth, placeOrderStripe)
orderRouter.post("/razorpay",auth, placeOrderRazorpay)

//user features
orderRouter.post("/user",auth, userOrders)

export default orderRouter;


