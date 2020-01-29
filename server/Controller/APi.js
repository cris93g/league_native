const axios = require('axios');
const {LEAGUE_API} = process.env;

///goes through the champion list
let getChampInfo = async (req, res) => {
  let data = await axios.get(
    `http://ddragon.leagueoflegends.com/cdn/10.2.1/data/en_US/champion.json`,
  );
  let results = data.data;
  if (results) {
    res.status(200).send(results);
  }
};

///checks for summoner name
let getSummonerName = async (req, res) => {
  let {name} = req.body;
  let data = await axios.get(
    `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`,
    {
      headers: {
        'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Riot-Token': LEAGUE_API,
      },
    },
  );
  let id = data.data.id;
  let final = await axios.get(
    `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}`,
    {
      headers: {
        'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Riot-Token': LEAGUE_API,
      },
    },
  );
  let results = final.data;
  let check = results;
  check.push(data.data);

  let resultObject = check.reduce(function(acc, x) {
    for (var key in x) acc[key] = x[key];
    return acc;
  }, {});

  if (resultObject) {
    res.status(200).send(resultObject);
  }
};
//get match history
let matchHistory = async (req, res) => {
  let {accountId} = req.res;
  let data = await axios.get(
    `https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/QK3N6Fl6s_Qvnw_fVaop4BIaSSwIJZwAXotwm6nyY0pMGq8?endIndex=2`,
    {
      headers: {
        'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Riot-Token': LEAGUE_API,
      },
    },
  );
  let info = data.data.matches;
  let arr = [];
  if (info) {
    for (let i = 0; i < info.length; i++) {
      arr.push(info[i].gameId);
    }
  }
  let final = [];
  let hist = [];
  for (let i = 0; i < arr.length; i++) {
    final.push(
      await axios.get(
        `https://na1.api.riotgames.com/lol/match/v4/matches/${arr[i]}`,
        {
          headers: {
            'Accept-Charset':
              'application/x-www-form-urlencoded; charset=UTF-8',
            'X-Riot-Token': LEAGUE_API,
          },
        },
      ),
    );
  }
  if (final) {
    for (let j = 0; j < final.length; j++) {
      hist.push(final[j].data);
    }
  }
  if (hist) {
    res.status(200).send(hist);
  }
};

//get if summoner is in match

let currentGame = async (req, res) => {
  let {id} = req.body;
  let info = await axios.get(
    `https://na1.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/7jJlVOjIQKnnn2mcPpNEGcQU5T8VxIviHe-wBL_pt74`,
    {
      headers: {
        'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Riot-Token': LEAGUE_API,
      },
    },
  );
  let results = info.data;
  if (results) {
    res.status(200).send(results);
  }
};

//let status

let leagueStatus = async (req, res) => {
  let info = await axios.get(
    `https://na1.api.riotgames.com/lol/status/v3/shard-data`,
  );
  let results = info.data;
  if (results) {
    info.data;
  }
};

let champRotation = async (req, res) => {
  let info = await axios.get(
    `https://na1.api.riotgames.com/lol/platform/v3/champion-rotations`,
    {
      headers: {
        'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Riot-Token': LEAGUE_API,
      },
    },
  );
  let champ = await axios.get(
    `http://ddragon.leagueoflegends.com/cdn/10.2.1/data/en_US/champion.json`,
  );
  let result1 = info.data.freeChampionIds;
  let result2 = Object.values(champ.data.data);
  let last = [];

  for (let j = 0; j < result2.length; j++) {
    if (result2.includes(result1)) {
      last.push(result2[i]);
    }
  }
  // if (result2) {
  // 	res.status(200).json(result2);
  // }
  console.log(last);
  // let welp = new Set(last);
  // console.log(welp);
};

module.exports = {
  getChampInfo,
  getSummonerName,
  matchHistory,
  currentGame,
  leagueStatus,
  champRotation,
};
