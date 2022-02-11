import React, {Fragment, useEffect} from "react";
import {ActionTodosPlayers} from "../Redux/Actions";
import {useSelector, useDispatch} from "react-redux";


export default function Players() {


const dispatch = useDispatch();
const jugadores = useSelector((state) => state.jugadores);
useEffect(() => {

  if (! jugadores.length ) {

      
      dispatch(ActionTodosPlayers());
     


  }
}, [dispatch, jugadores]);







  return (
    <Fragment>
     


     <div key={Math.random(5)}  className="card">
    
        
        <div className="iconitos">
          {jugadores
            ? jugadores.map((jugadores) => (
              <h1>{jugadores.name}</h1>
               
              ))
            : !jugadores
            ? ""
            : ""}
        
      </div>

      <br />
    </div>



     
    </Fragment>
  );
}
