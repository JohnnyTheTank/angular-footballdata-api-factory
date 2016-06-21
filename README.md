**angular-footballdata-api-factory** is an angularjs module with a [football-data.org](http://api.football-data.org) api factory.

[![npm version](https://badge.fury.io/js/angular-footballdata-api-factory.png)](https://badge.fury.io/js/angular-footballdata-api-factory)
[![Bower version](https://badge.fury.io/bo/angular-footballdata-api-factory.png)](https://badge.fury.io/bo/angular-footballdata-api-factory)
 
Author: Jonathan Hornung ([JohnnyTheTank](https://github.com/JohnnyTheTank))

## Usage

1. Install via either [bower](http://bower.io/), [npm](https://www.npmjs.com/) or downloaded files:
    1. `bower install --save angular-footballdata-api-factory`
    2. `npm install --save angular-footballdata-api-factory`
    3. download [angular-footballdata-api-factory.zip](https://github.com/JohnnyTheTank/angular-footballdata-api-factory/zipball/master)
2. Add `jtt_footballdata` to your application's module dependencies.
3. Include dependencies in your HTML.
    1. When using bower:
    ```html
    <script src="bower_components/angular-footballdata-api-factory/dist/angular-footballdata-api-factory.min.js"></script>
    ```
    2. When using npm:
    ```html
    <script src="node_modules/angular-footballdata-api-factory/dist/angular-footballdata-api-factory.min.js"></script>
    ```
    3. when using downloaded files
    ```html
    <script src="angular-footballdata-api-factory.min.js"></script>
    ```
4. Use the factory `footballdataFactory`


### factory methods

#### getSeasons

```js
//List all available soccer seasons
footballdataFactory.getSeasons({
    season: '<SEASON>',       // (optional) Defaults to the current year, given as 4 digit like '2015'
    apiKey: '<YOUR_API_KEY>', // Register for a free api key: http://api.football-data.org/register
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```

#### getTeam

```js
//Show one team.
footballdataFactory.getTeam({
    id: '<TEAM_ID>',
    apiKey: '<YOUR_API_KEY>', // Register for a free api key: http://api.football-data.org/register
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```

#### getTeams

```js
//List all teams for a certain soccerseason
footballdataFactory.getTeamsBySeason({
    id: '<SEASON_ID>',
    apiKey: '<YOUR_API_KEY>', // Register for a free api key: http://api.football-data.org/register
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```

#### getPlayers

```js
//Show all players for a certain team.
footballdataFactory.getPlayersByTeam({
    id: '<TEAM_ID>',
    apiKey: '<YOUR_API_KEY>', // Register for a free api key: http://api.football-data.org/register
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```

#### getLeagueTable

```js
//Show League Table / current standing.
footballdataFactory.getLeagueTableBySeason({
    id: '<SEASON_ID>',
    matchday: '<MATCHDAY>',   // (optional) For the leageTable subresource, the matchday defaults to the current matchday. For former seasons the last matchday is taken.
    apiKey: '<YOUR_API_KEY>', // Register for a free api key: http://api.football-data.org/register
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```


#### getFixture

```js
//Show one fixture.
footballdataFactory.getFixture({
    id: '<FIXTURE_ID>',
    apiKey: '<YOUR_API_KEY>', // Register for a free api key: http://api.football-data.org/register
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```

#### getFixtures

```js
//List fixtures across a set of soccerseasons.
footballdataFactory.getFixtures({
    timeFrame: '<TIMEFRAME>', // (optional) The value of the timeFrame argument must start with either p(ast) or n(ext), representing a timeframe either in the past or future. It is followed by a number in the range 1..99. It defaults to n7 in the fixture resource and is unset for fixture as a subresource. For instance: p6 would return all fixtures in the last 6 days, whereas n23 would result in returning all fixtures in the next 23 days.
    league: '<LEAGUE_CODE>',  // (optional) A (list of, comma separated) league-code(s). Default is unset and means all available. See the soccerseason list resource for currently available leagues or the appendix of the full documentation for a table of all league codes http://api.football-data.org/docs/latest/index.html
    apiKey: '<YOUR_API_KEY>', // Register for a free api key: http://api.football-data.org/register
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```

```js
//List all fixtures for a certain soccerseason.
footballdataFactory.getFixturesBySeason({
    id: '<SEASON_ID>',
    timeFrame: '<TIMEFRAME>', // (optional) The value of the timeFrame argument must start with either p(ast) or n(ext), representing a timeframe either in the past or future. It is followed by a number in the range 1..99. It defaults to n7 in the fixture resource and is unset for fixture as a subresource. For instance: p6 would return all fixtures in the last 6 days, whereas n23 would result in returning all fixtures in the next 23 days.
    matchday: '<MATCHDAY>',   // (optional) default is unset
    apiKey: '<YOUR_API_KEY>', // Register for a free api key: http://api.football-data.org/register
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```

```js
//Show all fixtures for a certain team.
footballdataFactory.getFixturesByTeam({
    id: '<TEAM_ID>',
    season: '<SEASON>',       // (optional) Defaults to the current year, given as 4 digit like '2015'
    timeFrame: '<TIMEFRAME>', // (optional) The value of the timeFrame argument must start with either p(ast) or n(ext), representing a timeframe either in the past or future. It is followed by a number in the range 1..99. It defaults to n7 in the fixture resource and is unset for fixture as a subresource. For instance: p6 would return all fixtures in the last 6 days, whereas n23 would result in returning all fixtures in the next 23 days.
    venue: '<VENUE>',         // (optional) 'home' or 'away'. Default is unset and means to return all fixtures.
    apiKey: '<YOUR_API_KEY>', // Register for a free api key: http://api.football-data.org/register
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```

## football-data.org JSON API

* Docs: http://api.football-data.org/documentation

## More angular-api-factories
[bandsintown](https://github.com/JohnnyTheTank/angular-bandsintown-api-factory) - [dailymotion](https://github.com/JohnnyTheTank/angular-dailymotion-api-factory) - [facebook](https://github.com/JohnnyTheTank/angular-facebook-api-factory) -  **footballdata** - [flickr](https://github.com/JohnnyTheTank/angular-flickr-api-factory) - [github](https://github.com/JohnnyTheTank/angular-github-api-factory) - [openweathermap](https://github.com/JohnnyTheTank/angular-openweathermap-api-factory) - [tumblr](https://github.com/JohnnyTheTank/angular-tumblr-api-factory) - [vimeo](https://github.com/JohnnyTheTank/angular-vimeo-api-factory) - [wikipedia](https://github.com/JohnnyTheTank/angular-wikipedia-api-factory) - [youtube](https://github.com/JohnnyTheTank/angular-youtube-api-factory)


## License

MIT