const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const port = process.env.port || 5000

//cpnnect mongodb atlas
mongoose.connect(process.env.mongo_url,
{useNewUrlParser:true}
)
.then(() => {
    console.log("Connected to MongoDB Atlas");
}).catch(error => {
    console.log("Error",error);
})

app.listen(port, () => {
    console.log("Start listening on port", port);
});