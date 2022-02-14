
import React, {Fragment, useRef, useState} from "react";
import Logo from "../logo.png";
import {useSelector, useDispatch} from "react-redux";
import {Link , useLocation} from "react-router-dom";
import {ActionBuscar} from "../Redux/Actions";
import Players from "./Players";

export default function Navbar() {
  const location = useLocation();
  console.log(location)
  const dispatch = useDispatch();
    const [buscar, setBuscar] = useState("");

    function handleBuscar(event) {
     
            event.preventDefault();
            setBuscar(event.target.value);
            console.log("handleBuscar", buscar, event.target.value)
            dispatch(ActionBuscar(event.target.value));


        

    }


    return (<header className="navbar">
        <div className="logodiv"> {" "}
            <Link to="/"> {" "}
                <img id="logo"
                    src={Logo}
                    className="logo"
                    alt=""/></Link>
        </div>
        <nav className="logoder">
            <ul className="menu">
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/players">Players</Link>
                </li>


                <li>
                    <Link to="/contacto">Contacto</Link>
                </li>
               
                {location.pathname ==="/players"? ( <Fragment> <div className="Search">
               
                  <input type = "text" placeholder ="Escriba el nombre del jugador a Buscar" name="buscador"
                        onChange={
                            (event) => handleBuscar(event)
                        }
                       
                        />  
                          
                </div> 
                
            
               </Fragment> ) : ""}
               
                {/* <button className="buscarboton">Buscar</button> */}
            </ul>

            {location.pathname ==="/players"? ( <Fragment> <div className="Search2">
               
               <input type = "text" placeholder ="Escriba el nombre del jugador a Buscar" name="buscador"
                     onChange={
                         (event) => handleBuscar(event)
                     }
                    
                     />  
                       
             </div> 
             
         
            </Fragment> ) : ""}


        </nav>
    </header>);
}
