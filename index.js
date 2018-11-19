const express    = require('express');
const webpush    = require('web-push');
const hbs        = require('hbs');
const jade       = require('jade');
const ejs        = require('ejs');
const bodyParser = require('body-parser');
const path       = require('path');

const routes     = require('./routes/routes');

const app = express();
const publicPath = path.join(__dirname, 'public');

app.set('view engine', 'hbs');
app.use(express.static(publicPath));
app.use(routes);

const port = 5000;
app.listen(port, () => console.log(`Server started at port: ${port}`));
