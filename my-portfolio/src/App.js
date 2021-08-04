import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage.component";
import ContactMe from "./components/ContactMe/ContactMe.component";
import "./App.css";

function App() {
  
  return (
    <div className="container">
      <p className="text-like-html-html">{"<html>"}</p>
      <p className="text-like-html-body">{"<body>"}</p>
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contactMe" component={ContactMe} />
      </BrowserRouter>
    </div>
  );
}

export default App;
