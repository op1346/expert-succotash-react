import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import Main from "./Main";
import Homegoods from "./Homegoods.jsx";
import Clothes from "./Clothes.jsx";
import Food from "./Food.jsx";
import Beauty from "./Beauty.jsx";
import CompanyPage from "./CompanyPage";
import About from "./About";
import Footer from "./Footer"

import "../App.css"

function App(){
  return(
    <HashRouter>
        <Route path="/" component={NavBar}/>

      <Switch>
        <Route path="/homegoods" component={Homegoods}/>
        <Route path="/clothes" component={Clothes}/>
        <Route path="/food" component={Food}/>
        <Route path="/beauty" component={Beauty}/>
        <Route path="/about" component={About}/>
        <Route path="/:company" component={CompanyPage} />
        <Route path="/" component={Main} />
      </Switch>

        <Route path="/" component={Footer}/>
    </HashRouter>
  )
}

export default App;
