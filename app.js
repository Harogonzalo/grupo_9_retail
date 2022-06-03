const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'))
;

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.listen(3000, () => {
    console.log('listening on http://localhost:3000');
});