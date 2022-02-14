import React from "react";
import { Fragment } from "react";
import Ima from "../Icos/ok.webp"
import Ima2 from "../Icos/ok.png"
//import Search from "./Search";
import {Link , useLocation} from "react-router-dom";
export default function Landing() {
  return (
    <Fragment>
     
     <div className="container" id="container">
  <div id="left" className="left"><img src={Ima} className="Ima"></img></div>  
  <div id="right" className="right">

<h2>Encuentra a tu Futbolista Favorito </h2>
<Link to="/players"><button className="boton">Ver Jugadores</button></Link>

  </div>
 
</div>
    
<div className="container" id="container">

<div id="izquierda" className="izquierda"><img src={Ima2} className="Ima2"></img></div>  
  <div id="right" className="derecha">

<h2>Comienza </h2>
<p>La app tiene un campo de búsqueda que permita realizar búsquedas de equipos por su nombre consumiendo el endpoint de la API de fifa 2021. <br></br><br></br>
mostrando de forma simple los resultados de la búsqueda.</p>


</div>
</div>

</Fragment>
  );
}
