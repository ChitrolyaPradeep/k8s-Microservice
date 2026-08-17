const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
res.json({ message: 'Hello from inside Kubernetes!', pod: process.env.HOSTNAME });
});
app.get('/health', (req, res) => res.status(200).send('OK'));
app.listen(PORT, () => console.log(`hello-service listening 
