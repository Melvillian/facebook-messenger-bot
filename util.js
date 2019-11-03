const request = require('request');

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
const SENDER_ID = process.env.SENDER_ID;

/// send a string message to a hardcoded Facebook Messenger Bot Room
const send_2_chat = (message) => {

  // if it was a text message, reply back with workload
  // Create the payload for a basic text message
  const text = {
    "text": JSON.stringify(message)
  };
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": SENDER_ID
    },
    message: text
  };

  // Send the HTTP request to the Messenger Platform
  request({
    "uri": "https://graph.facebook.com/v2.6/me/messages",
    "qs": { "access_token": PAGE_ACCESS_TOKEN },
    "method": "POST",
    "json": request_body
  }, (err, res, body) => {
    if (!err && (body && !body.error)) {
      console.log("message SUCCESS!");
    } else if (body && body.error) {
			console.log(`message FAILED with body: ${JSON.stringify(body)}`);
		} else {
      console.error("Unable to send message:" + err);
    }
  });
};

const fetch_github_quotes = (callback) => {
  request({
    "uri": "https://raw.githubusercontent.com/Melvillian/quotes/master/cowsay_quotes.txt",
    "method": "GET"
  }, (err, res, body) => {
    if (!err) {
    } else {
      console.error("Unable to send message:" + err);
    }
    callback(body);
  });
}

module.exports = {
  send_2_chat: send_2_chat,
  fetch_github_quotes: fetch_github_quotes,
};
