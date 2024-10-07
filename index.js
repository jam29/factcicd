// index.js
const express = require('express');
const factorial = require('./factorial');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/factorial/:number', (req, res) => {
    const number = parseInt(req.params.number, 10);
    if (isNaN(number)) {
        return res.status(400).send('Invalid number');
    }
    const result = factorial(number);
    res.json({ number, result });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


