import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './routes/userRoutes.js';

// hogaya bhai ho gaya 

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000; // Default port if not specified in .env
app.use(bodyParser.json()); // THE middleware to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));

// There is the conection to MongoDB 

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected successfully');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}

).catch((err) => {
    console.error('MongoDB connection error:', err);
}


);             
// Set up routes
app.use('/api/users', router); // Use the user routes