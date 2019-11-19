import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Home from "./Components/Home/Home";
import Rsvp from "./Components/Rsvp/Rsvp";
import Story from "./Components/Story/Story";
import Bridesmaids from "./Components/Bridesmaids/Bridesmaids";
import Groomsmen from "./Components/Groomsmen/Groomsmen";
import Registry from "./Components/Registry/Registry";
import Details from "./Components/Details/Details";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/home" component={Home} />
    <Route path="/rsvp" component={Rsvp} />
    <Route path="/story" component={Story} />
    <Route path="/bridesmaids" component={Bridesmaids} />
    <Route path="/groomsmen" component={Groomsmen} />
    <Route path="/registry" component={Registry} />
    <Route path="/details" component={Details} />
  </Switch>
);
