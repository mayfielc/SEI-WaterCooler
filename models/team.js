var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var teamSchema = new Schema({
//     name: String,
// }, {
//     timestamps: true
// });

var teamSchema = new Schema ({
    name: {
        type: String,
        enum: ['Baltimore Ravens', 'Buffalo Bills', 'Cincinnati Bengals',
            'Cleveland Browns', 'Denver Broncos', 'Houston Texans', 'Indianapolis Colts',
            'Jacksonville Jaguars', 'Kansas City Chiefs', 'LA Chargers', 'Miami Dolphins',
            'New England Patriots', 'New York Jets', 'Oakland Raiders', 'Pittsburgh Steelers',
            'Tennessee Titans', 'Arizona Cardinals', 'Atlanta Falcons', 'Carolina Panthers', 'Chicago Bears',
            'Dallas Cowboys', 'Detroit Lions', 'Green Bay Packers', 'LA Rams', 'Minnesota Vikings',
            'New Orleans Saints', 'New York Giants', 'Philadelphia Eagles', 'San Francisco 49ers',
            'Seattle Seahawks', 'Tampa Bay Buccaneers', 'Washington Redskins'],

    },
    comment: [],
    userId: String,
}, {
  timestamps: true
});




module.exports = mongoose.model('Team', teamSchema);