import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NotFound from './pages/not-found/NotFound'
import Main from './pages/main/Main'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
                return (
                  <Redirect to="/main" /> 
                )
            }}
          />
          <Route exact path="/main" component={Main} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
