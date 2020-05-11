import React from "react";
import ReactDOM from "react-dom";
import { login} from "./login";
import AppLayout  from "./App";
import { ProtectedRoute } from "./protected.route";

import { BrowserRouter, Route, Switch } from "react-router-dom";



const firebase = require("firebase");
require("firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxKEPeeLa4VE5uTYkkwH1fpCzztp3V47c",
  authDomain: "note-taking-app-35066.firebaseapp.com",
  databaseURL: "https://note-taking-app-35066.firebaseio.com",
  projectId: "note-taking-app-35066",
  storageBucket: "note-taking-app-35066.appspot.com",
  messagingSenderId: "1054822973500",
  appId: "1:1054822973500:web:d993e01cefac865e844339",
  measurementId: "G-EVYMR7T497"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={login} />
        <ProtectedRoute exact path="/app" component={AppLayout} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
  );
}

const rootElement = document.getElementById("container");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
