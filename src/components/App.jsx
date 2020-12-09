import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import Main from "./Main";
import Homegoods from "./Homegoods.jsx";
import Clothes from "./Clothes.jsx";
import Food from "./Food.jsx";
import Beauty from "./Beauty.jsx";

import "../App.css"

const App = () => {
  return(
    <HashRouter>
        <Route path="/" component={NavBar}/>
      <Switch>
        <Route path="/homegoods" component={Homegoods}/>
        <Route path="/clothes" component={Clothes}/>
        <Route path="/food" component={Food}/>
        <Route path="/beauty" component={Beauty}/>
        <Route path="/" component={Main} />
      </Switch>
    </HashRouter>
  )
}

export default App;
