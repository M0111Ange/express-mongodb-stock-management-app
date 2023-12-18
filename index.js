require('dotenv').config();

const express = require('express');
const allRoutes = require('./route');
const { connectDatabase } = require('./database/databaseConnection');

const app = express();
connectDatabase();

app.use(express.json());

app.use('/api/stock', allRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});