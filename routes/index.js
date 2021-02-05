var express = require('express');
var router = express.Router();
var store = require('../utils/store');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'List',
    items: store.getItems()
  });
});

router.post('/save', function(req, res, next) {
  store.addItem(req.body);
  res.send({
    status: 200,
    result: 'OK'
  });
});

module.exports = router;