import './App.css';
import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import {Homepage} from "./Pages/Homepage";
import {LoginPage} from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import {LoginPageClement} from "./Pages/LoginPageClement";
import {RegisterPageClement} from "./Pages/RegisterPageClement";
import {ProfilPageClement} from "./Pages/ProfilPageClement";

function App() {
  return (
      <HashRouter>
        <div className="container-fluid">
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/Login' component={LoginPage}/>
              <Route exact path='/LoginClement' component={LoginPageClement}/>
              <Route exact path='/RegisterClement' component={RegisterPageClement}/>
              <Route exact path='/profilClement' component={ProfilPageClement}/>
            <Route exact path='/Register' component={RegisterPage}/>
          </Switch>
        </div>
      </HashRouter>
  );
}

export default App;
