import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Home from "./Components/Home/Home";
import Info from "./Components/Info/Info";
import Story from "./Components/Story/Story";
import Bridesmaids from "./Components/Bridesmaids/Bridesmaids";
import Groomsmen from "./Components/Groomsmen/Groomsmen";
import Registry from "./Components/Registry/Registry";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/home" component={Home} />
    <Route path="/info" component={Info} />
    <Route path="/story" component={Story} />
    <Route path="/bridesmaids" component={Bridesmaids} />
    <Route path="/groomsmen" component={Groomsmen} />
    <Route path="/registry" component={Registry} />
  </Switch>
);
