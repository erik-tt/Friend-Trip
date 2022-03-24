import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';
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
            
              <Route exact path="/login" component={Login} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}


 
export default App;
