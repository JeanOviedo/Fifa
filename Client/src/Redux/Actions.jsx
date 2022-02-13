import axios from "axios";
export const PLAYERS = "PLAYERS";
export const BUSCAR = "BUSCAR";
export const DISABLESEARCH = "DISABLESEARCH";

export function ActionTodosPlayers() {
    return async function (dispatch) {
        try { // http://localhost:3001/players?page=
            let response = await axios("http://localhost:3001/players");
            let resultado = [
                ...new Map(response.data.map((itemlea) => [itemlea.items.page, itemlea])).values(),
            ];
            console.log(resultado[0].page, "PAGINA")
            console.log(resultado[0].totalPages, "PAGINAS")
            let pagina = resultado[0].page;
            let paginas = resultado[0].totalPages;
            dispatch({type: "PLAYERS", payload: response.data, pagina: pagina, paginas: paginas});
        } catch (error) {
            console.log("ERROR POKE API SE UTILIZA JSON INTERNO", error);


        };
    }
}


export function ActionBuscar(buscar) {
    return async function (dispatch) {
        try {

            let response = await axios("http://localhost:3001/players?search=" + buscar.toLowerCase());
            dispatch({type: "BUSCAR", payload: response.data});

        } catch (error) {
            console.log("ERROR", error);


        };
    }
}


export function ActionPagina(paginaok) {
    return async function (dispatch) {
        try {
            let response = await axios("http://localhost:3001/players");
            let resultado = [
                ...new Map(response.data.map((itemlea) => [itemlea.items.page, itemlea])).values(),
            ];
            console.log(resultado[0].page, "PAGINA")
            console.log(resultado[0].totalPages, "PAGINAS")
            let pagina = resultado[0].page;
            let paginas = resultado[0].totalPages;
            let response2 = await axios("http://localhost:3001/players?page=" + paginaok);
            dispatch({type: "PLAYERS", payload: response2.data, pagina: paginaok, paginas: paginas});
        } catch (error) {
            console.log("ERROR POKE API SE UTILIZA JSON INTERNO", error);


        };
    }
}
