"use strict";

angular.module("jtt_footballdata", [])
    .factory('footballdataFactory', ['$http', 'footballdataSearchDataService', function ($http, footballdataSearchDataService) {

        var footballdataFactory = {};

        footballdataFactory.getSeasons = function (_params) {

            var searchData = footballdataSearchDataService.getNew("getSeasons", _params);

            return $http({
                method: 'GET',
                url: searchData.url,
                params: searchData.object,
                headers: {
                    'X-Auth-Token': _params.apiKey,
                }
            });
        };

        footballdataFactory.getSeason = function (_params) {

            var searchData = footballdataSearchDataService.getNew("getSeason", _params);

            return $http({
                method: 'GET',
                url: searchData.url,
                params: searchData.object,
                headers: {
                    'X-Auth-Token': _params.apiKey,
                }
            });
        };

        footballdataFactory.getTeam = function (_params) {

            var searchData = footballdataSearchDataService.getNew("getTeam", _params);

            return $http({
                method: 'GET',
                url: searchData.url,
                params: searchData.object,
                headers: {
                    'X-Auth-Token': _params.apiKey ? _params.apiKey : apiKey,
                }
            });
        };

        footballdataFactory.getPlayersByTeam = function (_params) {

            var searchData = footballdataSearchDataService.getNew("getPlayersByTeam", _params);

            return $http({
                method: 'GET',
                url: searchData.url,
                params: searchData.object,
                headers: {
                    'X-Auth-Token': _params.apiKey ? _params.apiKey : apiKey,
                }
            });
        };

        footballdataFactory.getFixtures = function (_params) {

            var searchData = footballdataSearchDataService.getNew("getFixtures", _params);

            return $http({
                method: 'GET',
                url: searchData.url,
                params: searchData.object,
                headers: {
                    'X-Auth-Token': _params.apiKey ? _params.apiKey : apiKey,
                }
            });
        };

        footballdataFactory.getFixture = function (_params) {

            var searchData = footballdataSearchDataService.getNew("getFixture", _params);

            return $http({
                method: 'GET',
                url: searchData.url,
                params: searchData.object,
                headers: {
                    'X-Auth-Token': _params.apiKey ? _params.apiKey : apiKey,
                }
            });
        };

        footballdataFactory.getFixturesByTeam = function (_params) {

            var searchData = footballdataSearchDataService.getNew("getFixturesByTeam", _params);

            return $http({
                method: 'GET',
                url: searchData.url,
                params: searchData.object,
                headers: {
                    'X-Auth-Token': _params.apiKey ? _params.apiKey : apiKey,
                }
            });
        };

        footballdataFactory.getTeamsBySeason = function (_params) {

            var searchData = footballdataSearchDataService.getNew("getTeamsBySeason", _params);

            return $http({
                method: 'GET',
                url: searchData.url,
                params: searchData.object,
                headers: {
                    'X-Auth-Token': _params.apiKey ? _params.apiKey : apiKey,
                }
            });
        };

        footballdataFactory.getLeagueTableBySeason = function (_params) {

            var searchData = footballdataSearchDataService.getNew("getLeagueTableBySeason", _params);

            return $http({
                method: 'GET',
                url: searchData.url,
                params: searchData.object,
                headers: {
                    'X-Auth-Token': _params.apiKey ? _params.apiKey : apiKey,
                }
            });
        };

        footballdataFactory.getFixturesBySeason = function (_params) {

            var searchData = footballdataSearchDataService.getNew("getFixturesBySeason", _params);

            return $http({
                method: 'GET',
                url: searchData.url,
                params: searchData.object,
                headers: {
                    'X-Auth-Token': _params.apiKey ? _params.apiKey : apiKey,
                }
            });
        };

        return footballdataFactory;
    }])
    .service('footballdataSearchDataService', function () {
        this.getApiBaseUrl = function (protocol) {

            switch (protocol) {
                case 'http':
                case 'https':
                    protocol += ':';
                    break;

                default:
                    protocol = '';
            }

            return protocol + '//api.football-data.org/v1/';
        };

        this.fillDataInObjectByList = function (_object, _params, _list) {

            angular.forEach(_list, function (value, key) {
                if (angular.isDefined(_params[value])) {
                    _object.object[value] = _params[value];
                }
            });

            return _object;
        };

        this.getNew = function (_type, _params) {

            var footballdataSearchData = {
                object: {},
                url: '',
            };

            switch (_type) {
                case "getSeasons":
                    footballdataSearchData = this.fillDataInObjectByList(footballdataSearchData, _params, [
                        'apiKey', 'season',
                    ]);
                    footballdataSearchData.url = this.getApiBaseUrl(_params.protocol) + 'soccerseasons/';
                    break;

                case "getSeason":
                    footballdataSearchData = this.fillDataInObjectByList(footballdataSearchData, _params, [
                        'apiKey',
                    ]);
                    footballdataSearchData.url = this.getApiBaseUrl(_params.protocol) + 'soccerseasons/' + _params.id;
                    break;

                case "getTeam":
                    footballdataSearchData = this.fillDataInObjectByList(footballdataSearchData, _params, [
                        'apiKey'
                    ]);
                    footballdataSearchData.url = this.getApiBaseUrl(_params.protocol) + 'teams/' + _params.id;
                    break;

                case "getPlayersByTeam":
                    footballdataSearchData = this.fillDataInObjectByList(footballdataSearchData, _params, [
                        'apiKey'
                    ]);
                    footballdataSearchData.url = this.getApiBaseUrl(_params.protocol) + 'teams/' + _params.id + '/players';
                    break;

                case "getFixtures":
                    footballdataSearchData = this.fillDataInObjectByList(footballdataSearchData, _params, [
                        'apiKey', 'league', 'timeFrame'
                    ]);
                    footballdataSearchData.url = this.getApiBaseUrl(_params.protocol) + 'fixtures';
                    break;

                case "getFixture":
                    footballdataSearchData = this.fillDataInObjectByList(footballdataSearchData, _params, [
                        'apiKey', 'head2head'
                    ]);
                    footballdataSearchData.url = this.getApiBaseUrl(_params.protocol) + 'fixtures/' + _params.id;
                    break;

                case "getTeamsBySeason":
                    footballdataSearchData = this.fillDataInObjectByList(footballdataSearchData, _params, [
                        'apiKey',
                    ]);
                    footballdataSearchData.url = this.getApiBaseUrl(_params.protocol) + 'soccerseasons/' + _params.id + '/teams';
                    break;

                case "getLeagueTableBySeason":
                    footballdataSearchData = this.fillDataInObjectByList(footballdataSearchData, _params, [
                        'apiKey', 'matchday'
                    ]);
                    footballdataSearchData.url = this.getApiBaseUrl(_params.protocol) + 'soccerseasons/' + _params.id + '/leagueTable';
                    break;

                case "getFixturesBySeason":
                    footballdataSearchData = this.fillDataInObjectByList(footballdataSearchData, _params, [
                        'apiKey', 'matchday', 'timeFrame'
                    ]);
                    footballdataSearchData.url = this.getApiBaseUrl(_params.protocol) + 'soccerseasons/' + _params.id + '/fixtures';
                    break;

                case "getFixturesByTeam":
                    footballdataSearchData = this.fillDataInObjectByList(footballdataSearchData, _params, [
                        'apiKey', 'season', 'timeFrame', 'venue'
                    ]);
                    footballdataSearchData.url = this.getApiBaseUrl(_params.protocol) + 'teams/' + _params.id + '/fixtures';
                    break;

            }
            return footballdataSearchData;
        };
    });