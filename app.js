const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 4000;

app.use(express.static('public'))
;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});

app.listen(4000, () => {
    console.log('listening on http://localhost:4000');
});