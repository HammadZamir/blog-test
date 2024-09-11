const express= require('express')
const router = express.Router();
// const commentController = require('../controllers/commentController')
const {getComment , postComment} = require('../controllers/commentController')

router.get('/getcomment', getComment)
router.post('/postcomment', postComment)
module.exports=router

