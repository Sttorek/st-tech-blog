const router = require('express').Router();

const loginRoutes = require('./login.js');
const postRoutes = require('./post.js');
const commentRoutes = require('./comment.js');

router.use('/login', loginRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);


module.exports = router;
