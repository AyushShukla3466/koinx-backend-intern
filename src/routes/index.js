const express = require('express');
const statsRoute = require('./statsRoutes');
const deviationRoute = require('./deviationRoutes');

const router = express.Router();

router.use('/stats', statsRoute);
router.use('/deviation', deviationRoute);

module.exports = router;
