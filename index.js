const express = require('express');
const movies = require('./routes/movies');
const cors = require('cors');

const app = express();
const port = 3001;

const corsOptions = {
  origin: 'https://localhost:3000',
};

app.use(cors(corsOptions));
app.use(express.json());


const validApiKeys = ['5', '7', '9'];

const authenticateApiKey = (req, res, next) => {
  const apiKey = req.query.apiKey;

  if (!apiKey) {
    return res.status(401).json({ message: 'No valid API key was found.' });
  }

  if (!validApiKeys.includes(apiKey)) {
    return res.status(403).json({ message: 'Invalid API key!' });
  }

  next();
};

app.use((req, res, next) => {
  authenticateApiKey(req, res, next);
});

// lista av valid API nycklar
app.get('/api-keys', (req, res) => {
  res.json({ apiKeys: validApiKeys });
});

// Addera en ny nyckel
app.post('/api-keys', (req, res) => {
  const apiKey = req.body.apiKey;

  if (!apiKey) {
    return res.status(400).json({ message: 'API key is required.' });
  }

  validApiKeys.push(apiKey);
  res.json({ message: 'API key added successfully.' });
});

// Ta bort en valid API nyckel
app.delete('/api-keys/:key', (req, res) => {
  const apiKey = req.params.key;

  if (!apiKey) {
    return res.status(400).json({ message: 'API key is required.' });
  }

  const index = validApiKeys.indexOf(apiKey);
  if (index === -1) {
    return res.status(404).json({ message: 'API key not found.' });
  }

  validApiKeys.splice(index, 1);
  res.json({ message: 'API key removed successfully.' });
});

app.get('/', (req, res) => {
  res.send('This is an express example');
});

app.use('/movies', movies);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
