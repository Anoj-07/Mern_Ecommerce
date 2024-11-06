import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './Config/mongodb.js';
import connectCloudinary from './Config/cloudinary.js';
import userRouter from './routes/userRoute.js';


//App Config 
const app = express();
const port = process.env.PORT || 5000;
connectDB();
connectCloudinary

//Middleware
app.use(express.json());
app.use(cors());

//Api endpoints
// --------> userController.js <--------
app.use('/api/user',userRouter);

app.get('/', (req, res) =>{
    res.send("Api Working")
})

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})