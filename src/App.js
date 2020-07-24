import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Scenes/Home'

import './App.css'
import './Fonts/fonts.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
