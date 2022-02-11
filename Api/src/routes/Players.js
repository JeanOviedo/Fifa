const express = require("express");
const {players, Players} = require("../db");
const router = express.Router();
const axios = require("axios");

router.use(express.json());

router.get("/", async (req, res, next) => {
    const {page} = req.query;
    try {
        let PlayerCant = await Players.count();
       // let playersBD = await Players.findAll();

        if (PlayerCant === 0 || page != "") {
            let players = await axios.get(`https://www.easports.com/fifa/ultimate-team/api/fut/item?page=${page}`);
            let playersApi = players.data.items;
            let playersPage= players.data.page;
           // const ide = (new Date()).getTime().toString(36) + Math.random().toString(36).slice(2);
            
            // si no es null o undefined o "" entonces guardo los players en la tabla players
            if (playersApi) {
                playersApi = playersApi.map((t) => {
                    return {

                        //id: t.id,
                        //id :ide,
                        name: t.firstName + " " + t.lastName,
                        position: t.position,
                        nation: t.nation.abbrName,
                        team: t.club.abbrName,
                        page: page,
                    };
                });
            }


            let playersEnApi = playersApi.map((e) => {
                return {
                    //id: ide,
                    name: e.name,
                    position: e.position,
                    nation: e.nation,
                    team: e.team,
                    page: e.page
                };

            });
            console.log("Cargado de api")
            let sinduplicados = [...new Map(playersEnApi.map(item => [item.name, item])).values()]
            await Players.bulkCreate(sinduplicados);
            res.send((sinduplicados));

        } else { // Si la cantidad es distinta de 0 entonces se obtienen los players de la tabla players

            let playersBD = await Players.findAll();
            let playersEnBaseDatos = playersBD.map((e) => {
                return {
                   // id: e.id,
                    name: e.name,
                    position: e.position,
                    nation: e.nation,
                    team: e.team,
                    page : e.page
                };
            });

            console.log("Cargado de BD")
            // res.send(playersEnBaseDatos);
            res.send(playersEnBaseDatos);
        }
    } catch (error) {
        console.log(error)
        next(error);
    }
});


module.exports = router;
