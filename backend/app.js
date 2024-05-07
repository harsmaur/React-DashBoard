import express from 'express'
import connectdb from './db/connectdb.js';
import web from './Routes/web.js'
import cors from 'cors'
const app = express();
const db_url = 'mongodb://127.0.0.1:27017/Dashboard'

app.use(cors());
app.use(express.json());
connectdb(db_url);

app.use('/', web);

app.listen(3000, ()=>{
    console.log('Listening to port ', 3000)
})