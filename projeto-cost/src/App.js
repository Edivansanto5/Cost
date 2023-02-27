import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Components/pages/Home";
import Contato from "./Components/pages/Contato";
function App() {
  return (
   <Router>
      <ul>
          <li>Home</li>
          <li>Contato</li>
      </ul>
      <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
           <Route path='/contato'>
            <Contato/>
           </Route>
      </Switch>
   </Router>
  );
}

export default App;
