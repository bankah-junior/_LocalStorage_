import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Login, Signup } from './Containers';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Login/>
            </Route>
            <Route path='/login'>
              <Login/>
            </Route>
            <Route path='/signup'>
              <Signup/>
            </Route>
            <Route path='/home'>
              <Home/>
            </Route>
            <Route path="*">
              <h1>Not Found</h1>
            </Route>
          </Switch>
        </div> 
      </div>
    </Router>
  );
}

export default App;