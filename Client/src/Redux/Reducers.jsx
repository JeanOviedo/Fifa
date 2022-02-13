import { PLAYERS, BUSCAR, DISABLESEARCH, LOADING, MODAL } from "./Actions.jsx";
const initialState = {
  jugadores: [],
  buscado: [],
  bucadocomponente: false,
  pagina: 1,
  paginas: 908,
  loading: true,
  modal: false,
  modaldata: [],
 
};

export default function rooReducer(state = initialState, action) {
  switch (action.type) {
    case PLAYERS:
      return {
        ...state,
        jugadores: action.payload,
        pagina: action.pagina,
        paginas: action.paginas,
      };

    case BUSCAR:
      if (action.payload) {
        return {
          ...state,
          jugadores: action.payload,
          bucadocomponente: true,
        };
      } else if (action.payload == "") {
        return {
          ...state,
          // buscado: [],
          bucadocomponente: false,
        };
      }

    case DISABLESEARCH:
      return {
        ...state,
        bucadocomponente: action.payload,
      };

    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case MODAL:
      return {
        ...state,
        modaldata: action.payload,
        modal: action.modal,
      
      };

    default:
      return state;
  }
}
