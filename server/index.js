const express = require('express');
const app = express();
const cors = require('cors');

const port = 3001;

app.use(cors())

app.get('/', (req, res) => {
    res.send('toma na bunda');
});

app.listen(port, () => {
    console.log(`server list port ${port}`);
});

