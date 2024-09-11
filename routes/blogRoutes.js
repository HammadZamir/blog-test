const express = require('express');
const router = express.Router();
// const blogController = require('../controllers/blogController');
const { addblog , getblog , getSingleBlog } = require('../controllers/blogController')


router.post('/addblog', addblog);
router.get('/getblog', getblog)
router.get('/getblog/:id', getSingleBlog)
module.exports = router;
