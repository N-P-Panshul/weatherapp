var express = require('express');
var router = express.Router();

const axios = require('axios');


const { response } = require('express');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {data:response.data});
});

router.get('/submit',function(req,res){
const city = req.query.city
const url_api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=93536db295e11a8dc8fab432b305ac5b`;

axios.get(url_api)
  .then(function (response) {
    res.render('index',{data:response.data})
    // res.send(response.data)
  })
  .catch(function (error) {
    res.send(error)
  })
 
})

module.exports = router;
