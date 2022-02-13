import React from "react";
import Loading from "../Icos/loader.gif";
//import Loading2 from "../Icos/loader2.gif";
export default function Load() {
    return (
        <div className="load">
            <br/><br/>
            <div>
                <img src={Loading}
                    className="load"
                    alt={Loading}/> {" "}<br/> Cargando datos...<br/>
             <br/>
            </div>


        </div>
    );
}
