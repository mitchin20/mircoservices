const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 3003;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Service Shopping is running locally');
});

app.listen(port, () => {
    console.log(`Service Shopping listening at http://localhost:${port}`);
});

// - DB_URL=postgres://default:ghnsd20bXwVE@ep-aged-limit-a4qwgnda.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require
// depends_on:
//   - postgres



// postgres:
// image: postgres:latest
// environment:
//   POSTGRES_USER: default
//   POSTGRES_PASSWORD: ghnsd20bXwVE
//   POSTGRES_DB: verceldb
// ports:
//   - "5432:5432"
// volumes:
//   - postgres_data:/var/lib/postgresql/data
// healthcheck:
//   test: ["CMD-SHELL", "pg_isready -U default"]
//   interval: 1m30s
//   timeout: 30s
//   retries: 5
//   start_period: 30s