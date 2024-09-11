const express = require("express");
const blogModel = require("../models/Blog");
const app = express();
app.use(express.json());



const getblog = async (req, res) => {
  try {
    // console.log('Get Blog Route Hit')
    const blog = await blogModel.find();
    res.status(201).json(blog);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error fetching blogs", error: error.message });
  }
};



const addblog = async (req, res) => {
  try {
    const data = new blogModel(req.body);
    await data.save();
    res.status(201).json({
      message: "blog is added:",
      data,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something wrong",
      error: error.message,
    });
  }
};



const getSingleBlog = async (req, res) => {
  try {
    // Use the Blog model to find a blog by its ID from request parameters
    const blog = await blogModel.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // If the blog is found, return it in the response with a 200 status
    res.status(200).json(blog);
  } catch (error) {
    // Handle any errors by returning a 500 status with the error message
    res
      .status(500)
      .json({ message: "Error in fetching blog", error: error.message });
  }
};






module.exports = { addblog, getblog, getSingleBlog };
