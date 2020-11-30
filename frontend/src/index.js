import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import moment from 'moment-timezone';

console.log((moment.tz.guess()));
moment.tz.setDefault(moment.tz.guess());

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
