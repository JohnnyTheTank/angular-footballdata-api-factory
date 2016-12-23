var app = angular.module("app", ['jtt_footballdata']);
app.controller('controller', ['$scope', 'footballdataFactory', function($scope, footballdataFactory) {

    var apiKey = 'e42cb6a6ecc949c8897e06d284a55e05';

    footballdataFactory.getSeasons({
        season: '2015',
        apiKey: apiKey,
    }).then(function(_data){
        console.info("getSeasons", _data);
    });


    footballdataFactory.getSeason({
        id: '426',
        apiKey: apiKey,
    }).then(function(_data){
        console.info("getSeason", _data);
    });

    footballdataFactory.getFixtures({
        apiKey: apiKey,
    }).then(function(_data){
        console.info("getFixtures", _data);
    });

    footballdataFactory.getFixture({
        id: 155048,
        apiKey: apiKey,
    }).then(function(_data){
        console.info("getFixture", _data);
    });

    footballdataFactory.getFixturesByTeam({
        id: 5,
        apiKey: apiKey,
    }).then(function(_data){
        console.info("getFixturesByTeam", _data);
    });

    footballdataFactory.getTeam({
        id: 5,
        apiKey: apiKey,
    }).then(function(_data){
        console.info("getTeam", _data);
    });

    footballdataFactory.getPlayersByTeam({
        id: 5,
        apiKey: apiKey,
    }).then(function(_data){
        console.info("getPlayersByTeam", _data);
    });

    footballdataFactory.getTeamsBySeason({
        id: 424,
        apiKey: apiKey,
    }).then(function(_data){
        console.info("getTeamsBySeason", _data);
    });

    footballdataFactory.getLeagueTableBySeason({
        id: 426,
        matchday: 10,
        apiKey: apiKey,
    }).then(function(_data){
        console.info("getLeagueTableBySeason", _data);
    });

    footballdataFactory.getFixturesBySeason({
        id: 426,
        matchday: 10,
        apiKey: apiKey,
    }).then(function(_data){
        console.info("getFixturesBySeason", _data);
    });

}]);
