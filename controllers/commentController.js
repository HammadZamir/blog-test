const express= require('express');
const commentModel= require("../models/Comment")
const app= express();
app.use(express.json());


const getComment=async(req, res)=>{

    try{
        const comment= await commentModel.find();
        res.status(200).json(comment)
    }
    catch(error){
      res.send(500).json({message:"Error Fetching comment", error:error.message})
    }
}




const postComment=async(req, res)=>{
    try{
        const postcomment=  new commentModel(req.body)
       await postcomment.save()
       res.status(200).json({
        message:"comment is added:", postcomment})
    }catch(error){
   res.status(400).json({
    message:"Error in posting Comment", error:error.message
   })
    }

}

module.exports ={ getComment, postComment }