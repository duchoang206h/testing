const express = require('express');
const app = express();
app.use('/', (_, res) => res.send("OK"));
app.listen(3000, ()=>console.log("running::::3000"));