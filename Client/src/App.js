import { Fragment } from "react";

import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from "./Componentes/NavBar";
import Contacto from "./Componentes/Contacto";
import Landing from "./Componentes/Landing";
import Players from "./Componentes/Players";
function App() {
  return (
    <Fragment>
      <Navbar></Navbar>

      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route exact path="/players">
          <Players />
        </Route>
        <Route exact path="/contacto">
          <Contacto />
        </Route>
      
        
      </Switch>
    </Fragment>
  );
}

export default App;
