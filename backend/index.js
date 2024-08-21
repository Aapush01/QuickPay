const express = require('express');
const dotenv = require('dotenv');
const mainRouter = require("./routes/index");
const cors = require("cors");
const app = express();

require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use("/api/v1", mainRouter);

app.get('/', (req, res) => {
    res.send('Backend here!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
