const fs = require('fs');
const util = require('./util');

/// selects a random string line from the quotes.txt file
const pickRandomQuote = (callback) => {
  util.fetch_github_quotes((rawQuotes) => {
    const quotes = rawQuotes.split('\n');
    const numQuotes = quotes.length;

    const randomQuote = quotes[Math.floor(Math.random() * numQuotes)];

    callback(randomQuote);
  });
};

/// sends a random quote to the facebook bot message
const quote = pickRandomQuote((randomQuote) => {
	console.log(`random quote is: ${randomQuote}`);
  util.send_2_chat(randomQuote);
});
