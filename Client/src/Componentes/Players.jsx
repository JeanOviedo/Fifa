import React, {Fragment, useEffect} from "react";
import {ActionPagina, ActionTodosPlayers, ActionLoading} from "../Redux/Actions";
import {useSelector, useDispatch} from "react-redux";

import Buscar from "./Buscar"
import Paginados from "./Paginados";
import Load from "./Load";
export default function Players() {


const dispatch = useDispatch();
const jugadores = useSelector((state) => state.jugadores);
const buscadocomponente  = useSelector((state) => state.buscadocomponente );
const loading = useSelector((state) => state.loading);

useEffect(() => {

  if (! jugadores.length ) {

    
      dispatch(ActionTodosPlayers());
    
    

  }
}, [dispatch, jugadores]);


  return (
    <Fragment>
     <br/>
   
   
  


     <div key={Math.random(5)}  >
    
        
     {loading===true ? <center><Load></Load> </center> : ""}

     { buscadocomponente === true && loading === false ? <Buscar></Buscar> :<Paginados></Paginados>}
    
          {jugadores && loading === false 
            ? jugadores.map((jugadores) => (

              <div className="card">
              <div className="cuadro"><br/><img src={jugadores.items.imgjugador} className="jugador" /><br/>
               <img src={jugadores.items.nationid} />
   
              </div> <br/>
              <img src={jugadores.items.img} className="equipo"/><br/><br/>
              <h1>{jugadores.items.name}</h1><br/><br/>
          

          
                </div>
               
           
              ))
            : !jugadores
            ? ""
            : ""}
        
      
       

      <br />
    </div>


     
    </Fragment>
  );
}
