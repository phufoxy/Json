import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Pattern from './pages/recusion/Pattern';
import JsonPages from './pages/json/JsonPages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pattern" exact component={Pattern}/>
        <Route path="/json" exact component={JsonPages}/>
      </Switch>
    </Router>
  );
}

export default App;
