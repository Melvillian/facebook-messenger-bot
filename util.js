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
    if (!err) {
      console.log('message sent!')
    } else {
      console.error("Unable to send message:" + err);
    }
  });
};

module.exports = {
  send_2_chat: send_2_chat,
}
