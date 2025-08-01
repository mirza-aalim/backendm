import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    }
})


const User = mongoose.model('User', userSchema);
// Create the User model

export default User;
// Export the User model        
