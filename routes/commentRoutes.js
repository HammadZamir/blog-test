const express= require('express')
const router = express.Router();
const commentController = require('../controllers/commentController')

router.get('/getcomment', commentController.getComment)
router.post('/postcomment', commentController.postComment)
module.exports=router
