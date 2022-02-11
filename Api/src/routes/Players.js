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
            let playersPage = players.data.page;
            let playersTotalPage = players.data.totalPages;
            let totalResults = players.data.totalResults;
            // const ide = (new Date()).getTime().toString(36) + Math.random().toString(36).slice(2);

            // si no es null o undefined o "" entonces guardo los players en la tabla players
            if (playersApi) {
                playersApi = playersApi.map((t) => {
                    return {

                        // id: t.id,
                        // id :ide,
                        page: playersPage ,
                        totalPages: playersTotalPage,
                        totalResults: totalResults,
                        // page: page,
                        items: {
                            name: t.firstName + " " + t.lastName,
                            position: t.position,
                            nation: t.nation.abbrName,
                            team: t.club.abbrName,
                            img : "https://fifastatic.fifaindex.com/FIFA22/teams/dark/"+t.club.id+".png",
                            imgjugador : "https://fifastatic.fifaindex.com/FIFA22/players/"+t.baseId+".png"

                        }
                    };
                });
            }


            let playersEnApi = playersApi.map((e) => {
                return {
                    page: e.page,
                    totalPages: e.playersTotalPage,
                    totalResults: e.totalResults,
                    items: {
                        name: e.items.name,
                        position: e.items.position,
                        nation: e.items.nation,
                        team: e.items.team,
                        img : e.items.img,
                        imgjugador : e.items.imgjugador

                    }
                };

            });
            console.log("Cargado de api")
            let sinduplicados = [...new Map(playersEnApi.map(itemlea => [itemlea.items.name, itemlea])).values()]
            await Players.bulkCreate(sinduplicados);
            res.send((sinduplicados));

        } else { // Si la cantidad es distinta de 0 entonces se obtienen los players de la tabla players

            let playersBD = await Players.findAll();
            let playersEnBaseDatos = playersBD.map((e) => {
                return { // id: e.id,
                    page: e.page,
                    totalPages: e.playersTotalPage,
                    totalResults: e.totalResults,
                    items: {
                        name: e.items.name,
                        position: e.items.position,
                        nation: e.items.nation,
                        team: e.items.team,
                        img : e.items.img,
                        imgjugador : e.items.imgjugador,

                    }
                }
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
