const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const menuRouter = require('./routes/menuRouter');
const dishRouter = require('./routes/dishRouter');
const partnerRouter = require('./routes/partnerRouter');
const eventRouter = require('./routes/eventRouter');
const reviewRouter = require('./routes/reviewRouter');


const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/campsites', menuRouter);
app.use('/promotions', dishRouter);
app.use('/partners', partnerRouter);
app.use('/events', eventRouter);
app.use('/reviews', reviewRouter);



app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});