const express = require('express');
const proxy = require('express-http-proxy');
const app = express();
const PORT = process.env.PORT || 3000;

// Logger
app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
})

app.get('/', (req, res) => {
    res.send('API Gateway is running....')
});

app.get('/health', (req, res) => {
    res.send('API Gateway is healthy');
});

app.use('/products', proxy('http://localhost:3001'));
app.use('/customer', proxy('http://localhost:3002'));
app.use('/shopping', proxy('http://localhost:3003'));

// Connectivity Test Endpoints - Using Regular HTTP Requests for Testing
const http = require('http');

app.get('/test-products', (req, res) => {
    http.get('http://localhost:3001', (response) => {
        let data = '';
        response.on('data', chunk => { data += chunk; });
        response.on('end', () => res.send(`Connected to Products service: ${data}`));
    }).on('error', (error) => {
        res.status(500).send(`Failed to connect to Products service: ${error.message}`);
    });
});

app.listen(PORT, () => {
    console.log(`API Gateway is running at http://localhost:${PORT}`);
});