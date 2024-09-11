const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');


router.post('/addblog', blogController.addblog);
router.get('/getblog', blogController.getblog)
router.get('/getblog/:id', blogController.getSingleBlog)
module.exports = router;
