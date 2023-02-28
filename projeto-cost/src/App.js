//importaçoes da biblioteca react-router-dom
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";

// importaçoes dos componentes das páginas 
import Home from "./Components/pages/Home";
import Contato from "./Components/pages/Contato";
import NovoProjeto from "./Components/pages/NovoProjeto";
import Sobre from "./Components/pages/Sobre";

import Container from "./Components/Layout/Container";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";


function App() {
  return (
   <Router>
      <Navbar/>
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
      <Footer/>
   </Router>
  );
}

export default App;
