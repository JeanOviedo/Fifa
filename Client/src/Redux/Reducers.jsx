import {PLAYERS, BUSCAR} from "./Actions.jsx";
const initialState = {
    jugadores: [],
    buscado: [],
    bucadocomponente : false
}

export default function rooReducer(state = initialState, action) {
    switch (action.type) {
        case PLAYERS:

            return {
                ... state,
                jugadores: action.payload
            };

        case BUSCAR:

            return {
                ... state,
                buscado: action.payload,
                bucadocomponente : true

            };


        default:
            return state;
    }
}
