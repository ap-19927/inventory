const path = require('path');
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, 'client')));

const r = path.join(__dirname, '/server/controllers/read');
const w = path.join(__dirname, '/server/controllers/write');
app.set('views', [r,w]);
app.set('view engine', 'pug');

app.use('/', require('./server/router'));

app.listen(PORT, () => {
    console.log(`inv is listening on port ${PORT}`);
});
