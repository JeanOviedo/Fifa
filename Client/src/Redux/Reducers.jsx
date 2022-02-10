import {PLAYERS} from "./Actions.jsx";
const initialState = {
    jugadores: []
}

export default function rooReducer(state = initialState, action) {
    switch (action.type) {
      case PLAYERS: 

      return {
        ...state,
        pagina: action.payload,
      };

 default:
      return state;
  }
}