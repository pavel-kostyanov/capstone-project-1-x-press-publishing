const express = require ('express');

const apiRouter = express.Router();

const artistsRouter = require('./artists.js');
apiRouter.use('/artists', artistsRouter);

const seriesRouter = require('./series.js');
apiRouter.use('/series', seriesRouter);

const issueRouter = require('./issue.js');
apiRouter.use('/issue', issueRouter);


module.exports = apiRouter;
