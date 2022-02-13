const express = require("express");
const {Teams, Players} = require("../db");
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
            let teamsApi = teams.data.items;
            let teamsApi2 = teams.data.items;
            // poner los teams de la api en un array
         
            let teamsPage = teams.data.page;
            let teamsTotalPage = teams.data.totalPages;
            let totalResults = teams.data.totalResults;
            // si no es null o undefined o "" entonces guardo los teams en la tabla teams
            if (teamsApi) {

                
                
                teamsApi = teamsApi.map((t) => {

                   //let resultado = teamsApi2.find( ok => ok.club.name === t.club.name  );
                   let resultado = teamsApi2.filter(obj =>  t.club.name == obj.club.name ).map(obj => ({"name":obj.firstName +" "+obj.lastName}));

                    console.log(resultado, "RESULTADO")
                    
                    resultado = [...new Map(resultado.map((itemlea) => [itemlea.name, itemlea]) ).values(), ];
                    return {id: t.id, name: t.club.name , resultado:resultado };
                });

                
            }

           
            let teamsEnApi = teamsApi.map((e) => {
                return {id: e.id, name: e.name , Players: e.resultado} ;

            });
            console.log("Cargado de api")
          



            let sinduplicados = [...new Map(teamsEnApi.map(item => [item.name, item])).values()]
            await Teams.bulkCreate(sinduplicados);
            // const uniqueObjects = [...new Map(arr.map(item => [item.id, item])).values()]

            // let addresses = [...new Set([...dupAddress.map(address => dupAddress[address.id])])]

            res.send((sinduplicados));

        } else { // Si la cantidad es distinta de 0 entonces se obtienen los teams de la tabla teams


            let BuscarPlayersPorEquipo = await Players.findAll();
            let PlayersEnBaseDatos = BuscarPlayersPorEquipo.map((e) => {
                return {team: e.team};
            });
           
              console.log (PlayersEnBaseDatos , " buscar")


            let teamsBD = await Teams.findAll();
            let teamsEnBaseDatos = teamsBD.map((e) => {
                return {
                    
                    id: e.id, 
                    name: e.name,
                
                    Players : PlayersEnBaseDatos
                
                };
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


module.exports = router;
