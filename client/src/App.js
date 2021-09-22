import logo from './logo.svg';
import './App.css';
import { Switch,  Route } from "react-router-dom";
import Registration from './views/Registration';
import Home from './views/userHome';
import NewCharacter from './views/newCharacter';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
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
