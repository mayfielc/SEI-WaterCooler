var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'SEI Pro Football!!!',
    user: req.user,
    name: req.query.name
  });
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
   successRedirect : '/', 
   failureRedirect : '/'
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated() ) return next();
//   res.redirect('/auth/google');
// }

module.exports = router;