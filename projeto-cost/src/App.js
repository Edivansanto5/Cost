import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";

import Home from "./Components/pages/Home";
import Contato from "./Components/pages/Contato";
import NovoProjeto from "./Components/pages/NovoProjeto";
import Sobre from "./Components/pages/Sobre";
function App() {
  return (
   <Router>
      <div>
          <Link to='/'>Home</Link>
          <Link to='/contato'>Contato</Link>
          <Link to='/novoProjeto'>Novo Projeto</Link>
          <Link to='/sobre'>Sobre</Link>
      </div>
      <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>

           <Route path='/contato'>
            <Contato/>
           </Route>

           <Route path='/novoProjeto'>
            <NovoProjeto/>
           </Route>

           <Route path='/sobre'>
            <Sobre/>
           </Route>

      </Switch>
   </Router>
  );
}

export default App;
