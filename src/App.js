import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Pattern from "./pages/recusion/Pattern";
import JsonPages from "./pages/json/JsonPages";
import Task from "./pages/recusion/Task";
import Pow from "./pages/pow/Pow";
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

import { Firebase, FirebaseContext } from "./helpers/firebase";

function App() {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <Router>
        <Switch>
          <Route path="/pattern" exact component={Pattern} />
          <Route path="/json" exact component={JsonPages} />
          <Route path="/task" exact component={Task} />
          <Route path="/pow" exact component={Pow} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Redirect exact from="/" to="login" />
        </Switch>
      </Router>
    </FirebaseContext.Provider>
  );
}

export default App;
