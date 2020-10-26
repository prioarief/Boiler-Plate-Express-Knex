require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = process.env.APP_PORT || 5000
const routes = require('./src/route');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(routes)
app.get('*', (req, res) => {
	res.status(404).send('Not found');
});

app.listen(port, () => console.log(`App running on port ${port}`));
