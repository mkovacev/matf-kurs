import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import MenuBar from "../MenuBar";
import EntryList from "../EntryList";

const App = () => (
  <div className="app">
    <BrowserRouter>
      <div>
        <MenuBar />
        <Switch>
          <Route exact path="/" component={EntryList} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
