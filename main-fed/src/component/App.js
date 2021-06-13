import React from "react";
import Frame from "./Frame";
import Home from "./Home";
import SubReact from "./SubReact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
function App() {
  return (
    <div>
      <Frame>
        <Router>
          <Route path="/">
            <Home></Home>
            <div id="sub-react"></div>
            <Route path="/test">
              <SubReact></SubReact>
            </Route>
          </Route>
        </Router>
      </Frame>
    </div>
  );
}

export default App;
