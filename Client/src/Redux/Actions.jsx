import axios from "axios";


export const PLAYERS = "PLAYERS";
export const BUSCAR = "BUSCAR";

export function ActionTodosPlayers() {
    return async function (dispatch) {
        try {
            let response = await axios("http://localhost:3001/players");
            dispatch({type: "PLAYERS", payload: response.data});
        } catch (error) {
            console.log("ERROR POKE API SE UTILIZA JSON INTERNO", error);


        };
    }
}


export function ActionBuscar(buscar) {
    return async function (dispatch) {
        try {
            let response = await axios("http://localhost:3001/players?search=" + buscar.toLowerCase());
            dispatch({type: "PLAYERS", payload: response.data});
        } catch (error) {
            console.log("ERROR", error);


        };
    }
}


export function ActionPagina(pagina) {
    return async function (dispatch) {
        try {
            let response = await axios("http://localhost:3001/players?page=" + pagina);
            dispatch({type: "PLAYERS", payload: response.data});
        } catch (error) {
            console.log("ERROR POKE API SE UTILIZA JSON INTERNO", error);


        };
    }
}
