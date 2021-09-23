import './App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import axios from "axios";


import Registration from './views/Registration';
import Home from './views/userHome';
import NewCharacter from './views/newCharacter';
import TEST from './views/tester';
import Login from './views/Login';
import Navbar from './components/navbar';
import NavOut from './components/navOut';
import NavLog from './components/navLog';
import NotFound from "./views/NotFound";
import UpdateCharacter from './views/updateCharacter';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const history = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users/loggedin", {
        withCredentials: true,
      })
      .then((res) => setIsLoggedIn(res.data))
      .catch(() => {
        setIsLoggedIn(null);
      });
  }, []);

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
        setIsLoggedIn(null);
        history.push(`/`);
      })
      .catch(console.log);
  };

  return (
    <div className="App">
      {isLoggedIn ? <NavLog /> : <NavOut />}
      {isLoggedIn && <button onClick={logout}>Logout</button>}
      <Switch >
        {/* <Route exact path="/">
          
        </Route> */}
        <Route exact path="/">
          <Login setLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
        </Route>

        <Route exact path="/test">
          <TEST isLoggedIn = {isLoggedIn}/>
        </Route>

        <Route exact path="/register">
          <Registration />
        </Route>
        <Route exact path="/player/character/new/:id">
          <NewCharacter />
        </Route>
        <Route exact path="/update">
          <UpdateCharacter />
        </Route>
        {/* <Route exact path="/login">
          <Login setLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
        </Route> */}

        <Route component={NotFound} />

      </Switch>
    </div>
  );
}

export default App;
