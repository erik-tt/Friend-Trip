import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Profile from './components/Profile.js';
import useToken from './components/useToken';
 
function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="content">
            <Switch>
            
              <Route exact path="/" component={Login} />
              <Route path="/SignUp" component={SignUp} />
              <Route path="/Home" component={Home} />
              <Route path="/Profile" component={Profile} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}


 
export default App;
