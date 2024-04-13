const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);

// players
router.get('/players', controller.getAllPlayers);
router.get('/players/:playerId', controller.getPlayer);

router.post('/players', controller.postPlayer); // 경로가 동일하지만 get과 post로 구분 가능

router.patch('/players/:playerId/team', controller.patchPlayer);

router.delete('/players/:playerId', controller.deletePlayer);

// teams
router.get('/teams', controller.getTeams);
router.get('/teams/:teamId', controller.getTeam);
router.get('/teams/:teamId/players', controller.getTeamPlayers);

// team Games
router.get('/teamgames', controller.getAllGame);

module.exports = router;