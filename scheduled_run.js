const fs = require('fs');
const util = require('./util');

/// selects a random string line from the quotes.txt file
const pickRandomQuote = () => {
  const rawQuotes = fs.readFileSync('./quotes.txt', 'utf8');

  const quotes = rawQuotes.split('\n');
  const numQuotes = quotes.length;

  const randomQuote = quotes[Math.floor(Math.random() * numQuotes)];

  return randomQuote;
}

/// sends a random quote to the facebook bot message
const quote = pickRandomQuote();
util.send_2_chat(quote);
