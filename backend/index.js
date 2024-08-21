const express = require('express');
const dotenv = require('dotenv');

require('dotenv').config();
const app = express();

app.get('/', (req, res) => {
    res.send('Backend here!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
