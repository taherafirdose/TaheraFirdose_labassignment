var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tahera Firdose Personal Portfolio' });
});

router.get('/about', function(req,res, next) {
	res.render('about', {title: 'about'});
});

router.get('/contactMe', function(req,res, next) {
	res.render('contactMe', {title: 'contact'});
});

router.get('/projects', function(req,res, next) {
	res.render('projects', {title: 'projects'});
});

router.get('/services', function(req,res, next) {
	res.render('services', {title: 'services'});
});
module.exports = router;
