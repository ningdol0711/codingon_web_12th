const {Op} = require('sequelize');
const {Player, Profile, Team, TeamGame, Game, profile} = require('../models');

exports.main = (req, res) => {
  res.render('index');
}

exports.getAllPlayers = async (req, res) => {
  try{
    const players = await Player.findAll();
    console.log(players);
    res.json(players);
  }
  catch{(err) => {
    console.log(err);
    res.status(500).send(err);
  }}
}

// select player
exports.getPlayer = async (req, res) => {
  try{
    const {player_id} = req.params;
    const player = await Player.findOne({
      where: {player_id: player_id},
      include: [{model: profile, attributes: ['position', 'salary']}],
    })
  }
  catch{(err) => {
    console.log(err);
    res.status(500).send(err);
  }}
}

// add player
exports.postPlayer = async (req, res) => {
  try{
    console.log(req.body);
    const { name, age, teamId } = req.body;
    const newPlayer = await Player.create({
      // 보내려는 것:name, DB 컬럼명 name으로
      // 동일하다면 xx:xx형태가 아닌 name이라는 이름만 써도 ok
      name,
      age,
      team_id: teamId,
    });
    console.log(newPlayer);
    res.send(newPlayer)
  } catch(err){
    console.log("err", err);
    res.status(500).send("server err");
  }
}

// patch player
exports.patchPlayer = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.params);
    const { team_id } = req.body;
    const { playerId } = req.params;
    const updatedPlayer = await Player.update(
      {
        teamid: team_id, //우씨 헷갈려
      },
      {
        where: { player_id: playerId },
      }
    );
    console.log(updatedPlayer); //[0] / [1] >> 성공또는 실패
    console.log(updatedPlayer[0]); //배열인지 확인하기 위한 나의 작은 궁금증..
    res.json(updatedPlayer);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server err");
  }
};

// delete player
exports.deletePlayer = async (req, res) => {
  try {
    console.log(req.params.playerId);
    const { playerId } = req.params;
    const isDeleted = await Player.destroy({
      where: {
        player_id: playerId,
        // 컬럼명: 조건
      },
    });
    // 1번 삭제요청 두 번 보내면
    // 첫번쨰 요청은 1번 아이디가 있어서 삭제성공(1)
    // 똑같은 요청을 다시 보내면 where 조건 찾지 못해서 실패(0)
    console.log(isDeleted); //1 or 0
    if (isDeleted) res.send("삭제 완료");
    else return res.send(false);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server err");
  }
};

// get Team
exports.getTeams = async (req, res) => {
  try {
    console.log(req.query);
    const { sort, search } = req.query;
    let teams;
     if (sort === "name_asc") {
      teams = await Team.findAll({
        attributes: ["team_id", "name"],
        order: [["name", "ASC"]],
      });
    } else if (search) {
      teams = await Team.findAll({
        attributes: ["team_id", "name"],
        where: {
          name: { [Op.like]: `%${search}%` },
        },
      });
    } else {
         teams = await Team.findAll({
        attributes: ["team_id", "name"],
      });
    }
    if (teams.length === 0) res.send("다시 검색해보세요. 정보가 없습니다.");
    else res.send(teams);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server err");
  }
};

// get team
exports.getTeam = async (req, res) => {
  try {
    console.log("~~여기입니다면만");
    console.log(req.params); // teamId:~
    const { teamId } = req.params;
    const team = await Team.findOne({
      where: { team_id: teamId },
    });
    res.json(team);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server err");
  }
};

// get team_player /teams/:teamId/players
exports.getTeamPlayers = async (req, res) => {
  try {
    const teamPlayers = await Team.findOne({
      where: { team_id: teamId },
      include: [{ model: Player }],
    });
    res.send(teamPlayers);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server err");
  }
};

// get teamgames
exports.getAllGame = async (req, res) => {
  try {
    console.log(Team);
    console.log(Game);
    console.log(TeamGame);
    // TeamGame은 연결됐다고 안보고
    // 그냥 둘을 이어주는 매개체 역할만 하는겨?
    const allGame = await Team.findAll({
      include: [{ model: Game }],
    });
    console.log(allGame);
    res.send(allGame);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server err");
  }
};