import React, {Fragment, useEffect} from "react";
import {ActionPagina, ActionTodosPlayers} from "../Redux/Actions";
import {useSelector, useDispatch} from "react-redux";

import Buscar from "./Buscar"
import Paginados from "./Paginados";
export default function Players() {


const dispatch = useDispatch();
const jugadores = useSelector((state) => state.jugadores);
const buscadocomponente  = useSelector((state) => state.buscadocomponente );


useEffect(() => {

  if (! jugadores.length ) {

      
      dispatch(ActionTodosPlayers());
     
    

  }
}, [dispatch, jugadores]);


  return (
    <Fragment>
     <br/>
   
     
   


     <div key={Math.random(5)}  >
    
        
     


     { buscadocomponente === true ? <Buscar></Buscar> :<Paginados></Paginados>}
          {jugadores
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
