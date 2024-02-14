const express = require('express');

const app = express();

app.use('/',require('./routes/index'));
app.use('/checkout',require('./routes/razorpay.js'));



app.listen(3000, () => {
    console.log(`Server is listening on port 3000`);
});

