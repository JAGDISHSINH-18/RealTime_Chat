const express = require('express');
const app = express();
const port = 3000;

const quotes = [
  "Be the change you wish to see in the world. - Mahatma Gandhi",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  // Add more quotes as desired
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/quote', (req, res) => {
  const quote = getRandomQuote();
  res.json({ quote });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


