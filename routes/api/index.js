const router = require('express').Router();
const reactionRoutes = require('./reactionRoutes');
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/user', userRoutes);
router.use('/thought', thoughtRoutes);
router.use('/reaction', reactionRoutes);

module.exports = router;
