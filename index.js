const express = require('express');
const app = express();
const port = 3001;

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('waiting.pug')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});