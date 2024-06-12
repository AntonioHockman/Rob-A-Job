const router = require('express').Router();
const userRoutes = require('./userRoutes');
const jobRoutes = require('./jobRoutes');

router.use('/users', userRoutes);
router.use('/', jobRoutes);

module.exports = router;
