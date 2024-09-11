const Blog = require('../models/Blog');
const express=require('express');

const mongoose= require('mongoose')
const dotevn= require('dotenv');
const db=require("../config/db")
const cors = require('cors');
const app=express();
app.use(cors({ origin: 'http://localhost:3000' }));



dotevn.config();
const userRouter=require("../routes/userRoutes")
const blogRouter=require('../routes/blogRoutes')
const commentRouter=require('../routes/commentRoutes')
const port= 7000
app.use(express.json());

app.get('/', (req, res)=>{
res.send("hellow from the home")
})

app.use('/api', userRouter);
app.use('/api', blogRouter)
app.use('/api',commentRouter )

app.listen(port,()=>{
  console.log(`connection is setup at${port}`)

})




