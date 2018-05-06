let team  = {
    _players: [
        {firstName: 'Pablo', lastName: 'Sanchez', age: 11},
        {firstName: 'Camden', lastName: 'Matthews', age: 8},
        {firstName: 'Eli', lastName: 'Miles', age: 5}
        ],
    _games: [
        {opponent: "Broncos", teamPoints: 42, opponentPoints: 27},
        {opponent: "Sharks", teamPoints: 27, opponentPoints: 42},
        {opponent: "Thunder", teamPoints: 35, opponentPoints: 32}
    ],
    get players() {

    },
    get games() {

    },
    addPlayer(firstNm, lastNm, ageOfPlayer) {
        let player = {
            firstName: firstNm, lastName: lastNm, age: ageOfPlayer
        };
        this._players.push(player);
    },
    addGame(opponentName, teamPts, opponentPts) {
        let game = {
            opponent: opponentName, teamPoints: teamPts, opponentPoints: opponentPts
        };
        this._games.push(game);
    }
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);
team._players.forEach(element => {
    console.log(element['firstName'] +" " +element['lastName']+ ", Age: "+element['age']);
});
team.addGame("Lightning", 25, 85);
team.addGame("Jalapenos", 35, 33);
team.addGame("Jays", 43, 26);
team._games.forEach(element => {
    console.log("Game against: "+element['opponent'] +" US: " +element['teamPoints']+ " vs Them: "+element['opponentPoints']);
});