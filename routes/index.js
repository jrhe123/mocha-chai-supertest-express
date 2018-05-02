var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello world' });
});


router.post('/contact', function(req, res, next) {
  return res.json({
    Confirmation: 'Success',
    Name: 'Roy'
  })
});

module.exports = router;
