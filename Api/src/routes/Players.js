const express = require("express");
const {Teams, Players} = require("../db");
const router = express.Router();
const axios = require("axios");

// const GetPlayers = async () =>
// {
//

router.get("/", async (req, res, next) => {
    try {
        let PlayersCant = await Players.count();

        if (PlayersCant === 0) {
          
            let players = await axios.get(`https://www.easports.com/fifa/ultimate-team/api/fut/item`);
            let playersApi = players.data.items;

           
            if (playersApi) {
                playersApi2 = playersApi.map((t) => {
                    return {id: t.id, name: t.commonName, position: t.position, nation: t.nation.abbrName, team: t.club.abbrName};
                });
            }


            let PlayersEnApi = playersApi2.map((e) => {

                return {id: e.id, name: e.name, position: e.position, nation: e.nation , team: e.team};

            });
            console.log("Cargado de api")
            let sinduplicados = [...new Map(PlayersEnApi.map(item => [item.commonName, item])).values()]
            await Players.bulkCreate(sinduplicados);


            res.send((sinduplicados));

        } else { // Si la cantidad es distinta de 0 entonces se obtienen los teams de la tabla teams

            let teamsBD = await Players.findAll();
            let teamsEnBaseDatos = teamsBD.map((e) => { // return {id: e.id, name: e.name};
                return {id: e.id, name: e.name, position: e.position, nation: e.nation};
            });

            console.log("Cargado de BD")
            // res.send(teamsEnBaseDatos);
            res.send(teamsEnBaseDatos);
        }
    } catch (error) {
        console.log(error)
        next(error);
    }
});


// *Buscar por nombre
router.get("/", async (req, res) => {
    const {nombre} = req.query;
try {
    
} 

catch (error) {
    
}

});


module.exports = router;
