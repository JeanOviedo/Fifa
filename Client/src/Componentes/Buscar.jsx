import React, {Fragment} from "react";
import {ActionTodosPlayers} from "../Redux/Actions";
import {useSelector, useDispatch} from "react-redux";


export default function Buscar() {

const jugadores = useSelector((state) => state.buscado);



  return (
    <Fragment>
     <br/><br/>
     <br/><br/>
     
     <div key={Math.random(5)}  >
    
        
        
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
