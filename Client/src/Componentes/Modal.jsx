import React, { Fragment } from "react";
// import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import {CloseModal} from "../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";

export default function Modal() 


{
    let modaldata = useSelector((state) => state.modaldata);
 
    const dispatch = useDispatch();
  
  // function handleModalOn(event) {
  //   event.preventDefault();

  //     dispatch(OrdenaPorTipo(event.target.value));
  //     setPagina(0);
    
  // }

  function handleClick(evento, data, datoname) {
    evento.preventDefault();
    dispatch(CloseModal(false));
    console.log(data.items, "clik");
  }

  
  return (
<Fragment>
    { modaldata !== "" ? (



        <div key={Math.random(5)}  className="modal" key={Math.random(5)}>
        <div>
        
          <h1>{ modaldata.name}</h1> 
          <h1>Posición: { modaldata.position}</h1> 
          <h1> Equipo :</h1> <br></br> <img src={`${modaldata.img} `} alt={modaldata.name} className="card-image2" />
          <h1>Nación : <img src={`${modaldata.nationid}`} alt={modaldata.name} className="card-image" />{ modaldata.nation}</h1> 
          
          <img src={`${modaldata.imgjugador}`} alt={modaldata.name} className="card-image" />
          
        
        </div>

        <br />
        <button  onClick={(event) => handleClick(event)} className="buscarboton2">Cerrar</button>
      </div>



    ) : ""}
   
   </Fragment>);
}
