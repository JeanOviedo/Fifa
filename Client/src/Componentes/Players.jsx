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
     <br/><br/>
     <br/><br/>
     
     <div key={Math.random(5)}  >
    
        
        
          {jugadores
            ? jugadores.map((jugadores) => (
              <div className="card"><h1>{jugadores.name}</h1>
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