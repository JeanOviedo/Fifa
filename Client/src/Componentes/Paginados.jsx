import React, { Fragment } from 'react'
import {ActionPagina, ActionLoading} from "../Redux/Actions";
import {useSelector, useDispatch} from "react-redux";


export default function Paginados() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const buscadocomponente = useSelector((state) => state.buscadocomponente);
    const pagina = useSelector((state) => state.pagina);
    const paginas = useSelector((state) => state.paginas);


    function handleSiguiente(evento) {
        dispatch(ActionLoading(true));
        dispatch(ActionPagina(pagina+1));
        dispatch(ActionLoading(false));
        }
        
        function handleAtras(evento) {
            dispatch(ActionLoading(true));
          dispatch(ActionPagina(pagina-1));
          dispatch(ActionLoading(false));
          }
        

    return (
    
        <Fragment>
     
        { !buscadocomponente && !loading? (





<div className="paginado"> {
        pagina > 1  ? <button className="buscarboton"
            onClick={
                (evento) => {
                    handleAtras(evento);
                }
        }>Anteriores</button> : <button className="buscarboton" disabled>Anteriores</button>
    }

        {
        pagina + 1 < paginas   ? (<button className="buscarboton"
            onClick={
                (evento) => {
                    handleSiguiente(evento);
                }
        }>Siguientes</button>) : <button className="buscarboton" disabled>Siguientes</button>
    } </div>







        ) : ""}
    
    
    
    
    </Fragment>
    )
}
