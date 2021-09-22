import logo from './logo.svg';
import './App.css';
import { Switch,  Route } from "react-router-dom";
import Registration from './views/Registration';
import Home from './views/home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/register">
          <Registration />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
