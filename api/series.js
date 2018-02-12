const express = require('express');
const seriesRouter = express.Router();

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');

seriesRouter.param('seriesId', (req, res, next, seriesId) => {
  sql = "SELECT * FROM Series WHERE id = $seriesId";
  values = {$seriesId: seriesId};
  db.get(sql, values, (error, series) => {
    if(error){
      next(error);
    }else if(series){
      req.series = series;
      next();
    }else{
      res.sendStatus(404);
    }
  })
})

seriesRouter.get('/', (req, res, next) => {
  db.all("SELECT * FROM Series", (err, series) => {
    if(err){
      next(err);
    }else{
      res.status(200).json({series: series});
    }
  })
})

seriesRouter.get('/:seriesId', (req, res, next) => {
  res.status(200).json({series: req.series});
})

module.exports = seriesRouter;
