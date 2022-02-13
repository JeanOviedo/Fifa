import axios from "axios";
export const PLAYERS = "PLAYERS";
export const BUSCAR = "BUSCAR";
export const DISABLESEARCH = "DISABLESEARCH";
export const LOADING = "LOADING";
export const MODAL = "MODAL";

export function ActionTodosPlayers() {
  return async function (dispatch) {
    try {
      // http://localhost:3001/players?page=
      let response = await axios("http://localhost:3001/players");
      let resultado = [
        ...new Map(
          response.data.map((itemlea) => [itemlea.items.page, itemlea])
        ).values(),
      ];
      dispatch({ type: "LOADING", payload: true });
      console.log(resultado[0].page, "PAGINA");
      console.log(resultado[0].totalPages, "PAGINAS");
      let pagina = resultado[0].page;
      let paginas = resultado[0].totalPages;
      dispatch({
        type: "PLAYERS",
        payload: response.data,
        pagina: pagina,
        paginas: paginas,
      });
      dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      console.log("ERROR POKE API SE UTILIZA JSON INTERNO", error);
    }
  };
}

export function ActionBuscar(buscar) {
  return async function (dispatch) {
    try {
      let response = await axios(
        "http://localhost:3001/players?search=" + buscar.toLowerCase()
      );
      dispatch({ type: "LOADING", payload: true });
      dispatch({ type: "BUSCAR", payload: response.data });
      dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      console.log("ERROR", error);
    }
  };
}

export function ActionLoading(valor) {
  return { type: "LOADING", payload: valor };
}

export function ActionModal(valor,valor2) {
    console.log("MODAL-----------", valor , valor2);
  return { type: "MODAL", payload: valor, modal: valor2};
  
}

export function CloseModal(valor) {
   
  return { type: "MODAL",  modal: valor};
  
}

export function ActionPagina(paginaok) {
  return async function (dispatch) {
    try {
      let response = await axios("http://localhost:3001/players");
      dispatch({ type: "LOADING", payload: true });
      let resultado = [
        ...new Map(
          response.data.map((itemlea) => [itemlea.items.page, itemlea])
        ).values(),
      ];

      console.log(resultado[0].page, "PAGINA");
      console.log(resultado[0].totalPages, "PAGINAS");
      let pagina = resultado[0].page;
      let paginas = resultado[0].totalPages;
      let response2 = await axios(
        "http://localhost:3001/players?page=" + paginaok
      );
      dispatch({
        type: "PLAYERS",
        payload: response2.data,
        pagina: paginaok,
        paginas: paginas,
      });
      dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      console.log("ERROR POKE API SE UTILIZA JSON INTERNO", error);
    }
  };
}
