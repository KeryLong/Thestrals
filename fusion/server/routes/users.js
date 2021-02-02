var express = require('express');
var router = express.Router();

const mongoose = require('../models/database');
const Fuze = require('../models/FuzeSchema');

//ORIGINALLY 
/* GET users listing. */
//router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
//});

//module.exports = router;

// MODIFIED
//There are two routes below

//so when we have get request for /,function will be called
router.get('/', async (req, res, next) => {
  let data = await Fuze
  .find({})
  .sort({startDate:1, endDate: 1});
  console.info(`records retrieved from mongoose:`, data?.length)
  res.send(data);
});

router.get('/nextSevenDays', async (req, res, next) => {

  let DateTodayUtc = new Date();
  console.log(`Today's UTC is :`, DateTodayUtc);

  //To subtract 7 hours from UTC
  let DateToday = new Date(DateTodayUtc.getTime()-7 * 60 * 60 * 1000)
  console.log(`Actually, today is:` , DateToday);

  //let todayInMs = todayDate.getDate();
  //console.log(`Today in MS:`, todayInMs);
  //let nextWeek = todayDate.setDate(todayDate.getDate());
  //console.log(`so this is`, nextWeek);

  // To add 7 more days to DateToday
  let nextWeekTime = new Date(DateToday.getTime() + 7 * 24 * 60 * 60 * 1000);
  console.log(`Next 7th day from today is :`, nextWeekTime);

  let data = await Fuze
  .find({startDate : {$lte : nextWeekTime, $gte : DateToday}})
  .sort({startDate:1, endDate: 1});
  console.info(`records retrieved from mongoose:`, data?.length)
  res.send(data);
});

/* to find a Fuze by its id */
router.get('/:id', async (req, res, next) => {
  let FuzeId = req.params.id;
  //console.info('I m here', FuzeId)
 
  //error handling by try/catch in case of wrong id

  try{
    let data = await Fuze.findById(FuzeId);
     res.send(data);
  }
   catch(error){
     res.sendStatus(404)
   }
});

module.exports = router;
