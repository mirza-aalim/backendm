import express from 'express';
import { fetch, create, update, Dele } from '../controller/userController.js';

const router = express.Router();

// Define routes
router.get('/getAllusers', fetch);

router.post('/create', create);

router.put('/update/:id', update);

router.delete('/delete/:id' , Dele )


export default router;