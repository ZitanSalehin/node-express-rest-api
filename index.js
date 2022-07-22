import express from 'express';
import bodyParser from 'body-parser';

import userRouter from './router/user.js';

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use('/users', userRouter);

app.get('/', (req,res)=>{
    res.send('this is home page')
})

app.listen(PORT, ()=>{
    console.log(`server is ruuning on ${PORT}`)
})