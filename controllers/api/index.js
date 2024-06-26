const router = require('express').Router();
const jobRoutes = require('./jobRoutes');
const userRoutes = require('./userRoutes');
const commentRoutes = require('./comment')

router.use('/', jobRoutes);
router.use('/user', userRoutes);
router.use('/comment', commentRoutes);


module.exports = router;