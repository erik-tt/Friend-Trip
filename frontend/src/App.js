import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
 
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="content">
              <Route exact path="/" component={Login} />
              <Route path="/SignUp" component={SignUp} />
              <Route path="/Home" component={Home} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}


 
export default App;
