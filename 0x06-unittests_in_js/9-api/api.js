const express = require('express');
const app = express();
const PORT = 7865;

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
})
app.get('/cart/:id(\\d+)', (req, res) => {
    const cart_id = req.params.id;
    res.send(`Payment methods for cart ${cart_id}`);
})
app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`);
})
module.exports = app;