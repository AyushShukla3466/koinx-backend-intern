const express = require('express');
const Crypto = require('../models/Crypto');
const calculateStdDev = require('../utils/calculateStdDev');

const router = express.Router();

router.get('/', async (req, res) => {
    const { coin } = req.query;

    if (!coin) return res.status(400).send({ error: 'Coin is required' });

    const records = await Crypto.find({ coin }).sort({ timestamp: -1 }).limit(100);
    if (records.length < 2) return res.status(404).send({ error: 'Not enough data' });

    const prices = records.map(record => record.price);
    const stdDeviation = calculateStdDev(prices);

    res.send({ deviation: stdDeviation });
});

module.exports = router;
