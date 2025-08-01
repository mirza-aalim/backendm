import User from "../model/userModel.js";



// create controllesrs is here  +
export const create = async (req, res) => {
    try {
        const userData = User.create(req.body)
        return res.status(201).send(userData);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error is here ' });
    }
}

// fetch controller is here brother 
export const fetch = async (req, res) => {
    try {
        const users = await User.find();
        if (users.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }
        return res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ error: 'Internal Server Error related with fetch ' });
    }
}

// update controller is here brother
export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById({ _id: id });
        if (!userExist) {
            return res.status(404).json({ message: 'User not found ' });
        }
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error related with update ' });
    }
}

// delete controller is here brother
export const Dele = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedExist = await User.findById({ _id: id });
        if (!deletedExist) {
            return res.status(404).json({ message: 'User not found ' });
        }
        const deletedUser = await User.findByIdAndDelete(id, req.body, { new: true });
        return res.status(200).json(deletedUser);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error related with deletedUser ' });
    }
}