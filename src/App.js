import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pattern from "./pages/recusion/Pattern";
import JsonPages from "./pages/json/JsonPages";
import Task from "./pages/recusion/Task";
import Pow from "./pages/pow/Pow";

import { Firebase, FirebaseContext } from "./helpers/firebase";

const { FIREBASE_SENDER_ID } = "429364986528";

const serviceWorkerRegister = async () => {
  const register = await navigator.serviceWorker.register(
    `/firebase-messaging-sw.js?messagingSenderId=${FIREBASE_SENDER_ID}`
  );
  return new Firebase(register);
};

function App() {
  return (
    <FirebaseContext.Provider value={serviceWorkerRegister()}>
      <Router>
        <Switch>
          <Route path="/pattern" exact component={Pattern} />
          <Route path="/json" exact component={JsonPages} />
          <Route path="/task" exact component={Task} />
          <Route path="/pow" exact component={Pow} />
        </Switch>
      </Router>
    </FirebaseContext.Provider>
  );
}

export default App;
