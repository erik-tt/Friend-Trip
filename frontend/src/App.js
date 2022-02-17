import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
 
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
          </div>
          <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;
