import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Pattern from './pages/recusion/Pattern';
import JsonPages from './pages/json/JsonPages';
import Task from './pages/recusion/Task';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pattern" exact component={Pattern}/>
        <Route path="/json" exact component={JsonPages}/>
        <Route path="/task" exact component={Task}/>
      </Switch>
    </Router>
  );
}

export default App;
