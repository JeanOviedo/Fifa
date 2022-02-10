const express = require("express");
const {Teams} = require("../db");
const router = express.Router();
const axios = require("axios");
router.use(express.json());

router.get("/", async (req, res, next) => {
    try {
        let TeamCant = await Teams.count();
        // cuenta los teams  en la tabla teams
        // si no hay teamsen la tablateams entonces se obtienen los teams de la API
        if (TeamCant === 0) {
            let teams = await axios.get(`https://www.easports.com/fifa/ultimate-team/api/fut/item`);
            let teamsApi = teams.data.results;
            // poner los teams de la api en un array

            // si no es null o undefined o "" entonces guardo los teams en la tabla teams
            if (teamsApi) {
                teamsApi = teamsApi.map((t) => {
                    return {id: t.id, name: t.club.abbrName};
                });
            }

            await Teams.bulkCreate(teamsApi);
            res.send(teamsApi.map((p) => p.name));
        } else { // Si la cantidad es distinta de 0 entonces se obtienen los teams de la tabla teams

            let teamsBD = await Teams.findAll();
            let teamsEnBaseDatos = teamsBD.map((e) => {
                return {id: e.id, name: e.name};
            });
            res.send(teamsEnBaseDatos);
        }
    } catch (error) {
        next(error);
    }
});


module.exports = router;
