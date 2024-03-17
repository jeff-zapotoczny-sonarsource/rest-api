// Import necessary modules
import express from 'express';
import bodyParser from 'body-parser';

// Initialize express app
const app = express();
app.disable("x-powered-by");

// Use body-parser middleware to handle JSON data
app.use(bodyParser.json());

// Mock database
let items = [];

// Create endpoint
app.post('/items', (req, res) => {
    const item = req.body;
    items.push(item);
    res.status(201).send(item);
});

// Read endpoint
app.get('/items', (req, res) => {
    res.send(items);
});

// Update endpoint
app.put('/items/:id', (req, res) => {
    const id = req.params.id;
    const item = req.body;

    items[id] = item;
    res.send(item);
});

// Delete endpoint
app.delete('/items/:id', (req, res) => {
    const id = req.params.id;
    items.splice(id, 1);
    res.status(204).send();
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));