const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Service Shopping is running');
});

app.listen(port, () => {
    console.log(`Service Shopping listening at http://localhost:${port}`);
});