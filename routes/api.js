import  express  from 'express';
import Player from '../model/player.js'
const router = express.Router();

// get all players
router.get('/players', async (req, res) => {
try {
    const players = await Player.find({});
    console.log(players);
    res.json(players);
} catch (err) {
    console.log(err);
    res.status(500).send('Server error');
}
});

// get player by name 
// example : http://localhost:3000/api/players/Kylian%20Mbapp%C3%A9
router.get('/players/:name', async (req, res) => {
    try {
        const players = await Player.find({name : req.params.name});
        console.log(players);
        res.json(players);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
    });
    

export default router;