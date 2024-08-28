const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Service Products is running');
});

app.listen(port, () => {
    console.log(`Service Product listening at http://localhost:${port}`);
});