import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../Components/pages/Home";
import Sobre from "../Components/pages/Sobre";
import Contato from "../Components/pages/Contato";
import NovoProjeto from "../Components/pages/NovoProjeto";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }    path="/" exact />
           <Route component = { Sobre }   path="/sobre" />
           <Route component = { Contato } path="/contato" />
           <Route component={NovoProjeto} path="/NovoProjeto"/>
       </BrowserRouter>
   )
}

export default Routes;