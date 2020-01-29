const {
  getChampInfo,
  getSummonerName,
  matchHistory,
  currentGame,
  leagueStatus,
  champRotation,
} = require('../Controller/APi');
module.exports = app => {
  app.get(`/api/get_champ_json`, getChampInfo);
  app.post(`/api/get_summoner`, getSummonerName);
  app.get(`/api/get_history`, matchHistory);
  app.get(`/api/get_game`, currentGame);
  app.get(`/api/get_status`, leagueStatus);
  app.get(`/api/get_champion_rotation`, champRotation);
};
