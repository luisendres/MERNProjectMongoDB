import logo from './logo.svg';
import './App.css';
import { Switch,  Route } from "react-router-dom";
import Registration from './views/Registration';
<<<<<<< HEAD
import Home from './views/userHome';
import NewCharacter from './views/newCharacter';
=======
import Home from './views/home';
>>>>>>> d340027e548c93e54f4c2934dbd571f0bdccd090

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

        <Route exact path="/player/character/new/:id">
          <NewCharacter />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
