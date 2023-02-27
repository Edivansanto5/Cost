import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Components/pages/Home";
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

      </Switch>
   </Router>
  );
}

export default App;
