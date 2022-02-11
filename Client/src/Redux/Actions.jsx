import axios from "axios";


export const PLAYERS = "PLAYERS";


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
