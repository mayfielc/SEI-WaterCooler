var express = require('express');
var router = express.Router();
var teamsCtrl = require('../controllers/teams');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('/teams', {title: 'Add Team'});
// });
router.get('/', teamsCtrl.index);
// router.get('/:id', teamsCtrl.show);
router.get('/show', teamsCtrl.show);
router.put('/:id', teamsCtrl.update);
router.post('/show', teamsCtrl.create);
router.post('/comment', teamsCtrl.addComment);
router.get('/delete', teamsCtrl.deleteComment)

module.exports = router;
