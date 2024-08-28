const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Service Customer is running');
});

app.listen(port, () => {
    console.log(`Service Customer listening at http://localhost:${port}`);
});