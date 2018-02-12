const express = require ('express');
const app = express();
const cors = require ('cors');
const morgan = require('morgan');
const errorhandler = require('errorhandler');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(bodyParser.json());
app.use(errorhandler());
app.listen(PORT, console.log('app is running on port 4001'));

const apiRouter = require('./api/api.js')
app.use('/api', apiRouter);

module.exports = app;
