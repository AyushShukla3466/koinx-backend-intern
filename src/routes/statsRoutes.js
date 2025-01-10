const express = require('express');
const Crypto = require('../models/Crypto');

const router = express.Router();

router.get('/', async (req, res) => {
    const { coin } = req.query;

    if (!coin) return res.status(400).send({ error: 'Coin is required' });

    const data = await Crypto.findOne({ coin }).sort({ timestamp: -1 });
    if (!data) return res.status(404).send({ error: 'Data not found' });

    res.send({
        price: data.price,
        marketCap: data.marketCap,
        '24hChange': data.change24h,
    });
});

module.exports = router;
