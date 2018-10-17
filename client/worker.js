console.log('Service Worker Loaded');

self.addEventListener('push', e => {
  const data = e.data.json();
  console.log('Push Recieved..');
  self.registration.showNotification(data.title, {
    body: 'Nitified by Andrew Rosinskiy',
    icon: 'https://image.shutterstock.com/image-vector/shield-letter-s-logo-260nw-633031571.jpg'
  });
});
