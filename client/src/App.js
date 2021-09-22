import './App.css';
import React, { useState } from "react";
import { Switch,  Route, useHistory } from "react-router-dom";
import axios from "axios";


import Registration from './views/Registration';
import Home from './views/userHome';
import NewCharacter from './views/newCharacter';
import TEST from './views/tester';
import Login from './views/Login';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  const logout = () => {
    axios
      .post(
        "http://localhost:8000/api/logout",
        {},
        {
          // need to send the cookie in request so server can clear it
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        setIsLoggedIn(false);
        history.push(`/`);
      })
      .catch(console.log);
  };

  return (
    <div className="App">
      {isLoggedIn && <button onClick={logout}>Logout</button>}
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? <TEST/>:<Registration/>}
          {/* <Home /> */}
        </Route>

        <Route exact path="/register">
          <Registration />
        </Route>

        <Route exact path="/login">
          <Login setLoggedIn={() => setIsLoggedIn(true)} />
        </Route>

        <Route exact path="/test">
          <TEST exact path="/test"/>
        </Route>

        <Route exact path="/player/character/new/:id">
          <NewCharacter />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
