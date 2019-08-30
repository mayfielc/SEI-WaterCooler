var Team = require('../models/team');

module.exports = {
    index,
    show,
    create,
    update,
    addComment,
    deleteComment
};

// build a button that takes you to the index page
// that has all teams selected. 
// at the moment in that page you will have no teams selected
// in the index page have a button that href's you to the add team or new page
// in that page that the ability to select teams.
// that corresponds to the controller that creates the team
// which then redirects you to the index page and shows that team you selected.
// then we can go on and add a delete button or update or the ability to add reviews.

function update(req, res) {
    req.body.done = req.body.done;
    Team.update(req.params.id, req.body);
    res.render(`/teams/show'${req.params.id}`);
}
// function show(req, res) {
//     Team.findById(req.params.id).exec(function (err, teams) {
//         res.render('teams/review', {user: req.user, teams});
//     });
// };

function show(req, res) {
    Team.findById(req.params.id, function(err, detail) {
        res.render('teams/index', {title: 'Choose Team', detail, user: req.user});
    });
};

function index(req, res) {
    Team.find({userId: req.user.googleId}, function(err, teams) {
        if (teams.length) {
            res.render('teams/show', {title: `My Team: ${teams[0].name}`, user: req.user, comments: teams[0].comment});
        } else { 
            res.render('teams/index', { title: 'Choose Team', teams, user: req.user});
        }
    });
};

function create(req, res) {
    var teamObject = {name: req.body.name, userId: req.user.googleId};
    var teams = new Team(teamObject);
    teams.save(function (err) {
      if (err) return res.send(err);
      res.render('teams/show', {user: req.user, title: `My Team: ${req.body.name}`, comments: []});
    });
}

function addComment(req, res) {
    var newComment = req.body.comment;
    Team.find({userId: req.user.googleId}, function(err, teams) {
        var commentArray = teams[0].comment;
        commentArray.push(newComment);
        Team.findOneAndUpdate({userId: req.user.googleId}, {comment: commentArray}, {runValidators: true}, function(err, team){
            res.render('teams/show', {user: req.user, title: `My Team: ${team.name}`, comments: commentArray});
        });
    });
};

function deleteComment(req, res) {
    Team.findOneAndRemove({userId: req.user.googleId}, {runValidators: true}, function(err){
        console.log('err: ', err)
        res.render('teams/index', { title: 'Choose Team', user: req.user});
    });
};


// function show(req, res) {
//     Team.findById();
// }