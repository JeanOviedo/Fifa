import {PLAYERS, BUSCAR, DISABLESEARCH} from "./Actions.jsx";
const initialState = {
    jugadores: [],
    buscado: [],
    bucadocomponente: false,
    pagina: 1,
    paginas: 908,
    loading : false,

}

export default function rooReducer(state = initialState, action) {
    switch (action.type) {
        case PLAYERS:

            return {
                ... state,
                jugadores: action.payload,
                pagina: action.pagina,
                paginas: action.paginas
            };

        case BUSCAR:

        if (action.payload) {
            
            return {
                ... state,
                jugadores: action.payload,
                bucadocomponente: true,
                
                

            };
        }
        else
        if (action.payload=="") 
        {
            return {    ... state,
            //buscado: [],
            bucadocomponente: false, 
        }
    };


        case DISABLESEARCH:

            return {
                ... state,
                bucadocomponente: action.payload
            }

        default:
            return state;
    }
}
