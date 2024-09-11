const express = require("express");
const userModel = require("../models/User");
const app = express();

app.use(express.json());



const getUser = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users); // Send the list of users with a 200 status code
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
};



const addUser = async (req, res) => {
  try {
    const user = new userModel(req.body);
    await user.save();
    res.status(201).json({ message: "User added successfully", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding user", error: error.message });
  }
};

module.exports = { getUser, addUser };
