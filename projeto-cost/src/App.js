//importaçoes da biblioteca react-router-dom
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";

// importaçoes dos componentes das páginas 
import Home from "./Components/pages/Home";
import Contato from "./Components/pages/Contato";
import NovoProjeto from "./Components/pages/NovoProjeto";
import Sobre from "./Components/pages/Sobre";

import Container from "./Components/Layout/Container";
import Navbar from "./Components/Layout/Navbar";

function App() {
  return (
   <Router>
      <div>
      <Navbar/>
      </div>
      <Switch>
        <Container customClass='min-height'>
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
          </Container>
      </Switch>
      
      <footer>EdivanSantos2023</footer>
   </Router>
  );
}

export default App;
