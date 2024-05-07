import express from 'express'
import { getAllData } from '../Controllers/GetData.js';

const router = express.Router();

router.get('/api/alldata', getAllData);

export default router;