const express    = require('express');
const bodyParser = require('body-parser');
const webpush    = require('web-push');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


const publicVapidKey = 'BOOWqsNASgwet21Mbu5dHgU7b3vticipQJDQBWp4r417UdxkcP5guTH082V_51dqSkFj7gPMKfBYJI-zrU-YE34';
const privateVapidKey = '8v7VrYIoSyb2KSF9Y01FjArQkhTykxfppSGkM0KHYU8';



webpush.setVapidDetails('mailto:ron3trade@gmail.com', publicVapidKey, privateVapidKey);

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/subscribe', (req ,res) => {
  //Get pushSubscription object
  const subscription = req.body;

  // Send status 201 - res created!
  res.status(201).json({});

  // Create payload
  const payload = JSON.stringify({ title: 'Push Test'});

  // Pass object into sendNotification
  webpush.sendNotification(subscription, payload).catch(err => console.error(err));
});

module.exports = router;
