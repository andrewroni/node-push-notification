const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.json());

const publicVapidKey = 'BOOWqsNASgwet21Mbu5dHgU7b3vticipQJDQBWp4r417UdxkcP5guTH082V_51dqSkFj7gPMKfBYJI-zrU-YE34';
const privateVapidKey = '8v7VrYIoSyb2KSF9Y01FjArQkhTykxfppSGkM0KHYU8';

webpush.setVapidDetails('mailtp:ron3trade@gmail.com', publicVapidKey, privateVapidKey);

// Cubscribe Route
app.post('/subscribe', (req ,res) => {
  //Get pushSubscription object
  const subscription = req.body;

  // Send status 201 - res created!
  res.status(201).json({});

  // Create payload
  const payload = JSON.stringify({ title: 'Push Test'});

  // Pass object into sendNotification
  webpush.sendNotification(subscription, payload).catch(err => console.error(err));
});

const port = 5000;
app.listen(port, () => console.log(`Server started at port: ${port}`));
