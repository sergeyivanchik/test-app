import * as React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import TestPage from './components/MainPage'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="router">
          <Route exact path="/" component={TestPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
