import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import {withRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      {routes}
      <footer id='footer'>Made by Bao Le</footer>
      </div>
    );
  }
}

export default withRouter(App);
