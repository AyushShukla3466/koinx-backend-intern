const cron = require('node-cron');
const axios = require('axios');
const Crypto = require('../models/Crypto');  // Assuming you have a Crypto model schema

// Function to fetch crypto data
const fetchCryptoData = async () => {
    try {
        // API URL for fetching crypto data
        const url = 'https://api.coingecko.com/api/v3/coins/markets';
        const params = {
            vs_currency: 'usd',  // Fetching data in USD
            ids: 'bitcoin,matic-network,ethereum',  // Coin IDs
        };

        const response = await axios.get(url, { params});  // Fetch data from CoinGecko
        const data = response.data;  // Response data

        // Iterate over the fetched data and store it in the database
        for (const coin of data) {
            const record = new Crypto({
                coin: coin.id,
                price: coin.current_price,           // Current price in USD
                marketCap: coin.market_cap,         // Market cap in USD
                change24h: coin.price_change_percentage_24h,  // 24-hour change percentage
            });

            await record.save();  // Save data to MongoDB
        }
        console.log('Crypto data fetched and stored.');
    } catch (err) {
        console.error('Error fetching crypto data:', err.message);
    }
};

// Schedule the task to run every 2 hours using cron
const cronJob = cron.schedule('0 */2 * * *', () => {
    console.log('Cron job started');  // Debugging line
    fetchCryptoData();         // Fetch and save data
});  // Run every 2 hours
module.exports = cronJob;

