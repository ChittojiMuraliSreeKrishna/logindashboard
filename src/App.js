import React from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./Components/Jsx/LoginPage";
import Body from "./Components/Jsx/Body";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={LoginPage} />
        <Route path="/body/" component={Body} />
      </BrowserRouter>
    </div>
  );
};

export default App;
