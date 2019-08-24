var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// Google OAuth login Route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth Callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
   successRedirect: 'index', 
   failureRedirect: 'index'
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/users');
});

module.exports = router;
