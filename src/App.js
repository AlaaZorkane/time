/* Libraries */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

/* Components */
import Landing from './components/Landing'
import Journey from './components/Journey'


/* CSS & Assets */
import './css/general/App.css'

/* App - Handling routes & paths and loading into the dom */
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={Landing} />
          <Route path="/Journey" component={Journey} />
        </div>
      </Router>
    );
  }
}

export default App;
