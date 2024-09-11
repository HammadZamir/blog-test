// const Blog = require('../models/Blog');
// const mongoose= require('mongoose')
// const db=require("../config/db")

const express = require('express');
const dotevn = require('dotenv');
const cors = require('cors');

const app=express();
app.use(cors({ origin: 'http://localhost:3000' }));

dotevn.config();

const userRouter = require("./routes/userRoutes")
const blogRouter = require('./routes/blogRoutes')
const commentRouter = require('./routes/commentRoutes')

require('./models/dbConnection');

app.use(express.json());

app.get('/', (req, res)=>{
res.send("hellow from the home")
})

app.use('/api', userRouter);
app.use('/api', blogRouter)
app.use('/api',commentRouter )


const port = process.env.PORT || 7001;

app.listen(port,()=>{
  console.log(`connection is setup at ${port}`)

})




