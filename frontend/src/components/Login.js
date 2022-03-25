
import React, {useRef, useState, useEffect, useContext} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import Logo from './files/Header2.png';
import SignUp from './SignUp'
import Grid from '@mui/material/Grid';


//const [userNameLog, passwordLog] = useState('');

//https://www.youtube.com/watch?v=X3qyxo_UTR4&t=1582s code inspired by this tutorial



export default function Login ({ setToken }) {
  
  const userRef= useRef();
  const errRef = useRef();
  const [switchB, setSwitchB] = React.useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [signUp, setSignUp] = useState(false);
  
  
  
  useEffect(() => {
    userRef.current.focus();
  },[])

  useEffect(() => {
   setErrorMsg('');
  },[username, password])

  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      const response = await axios.post("http://localhost:8080/api/login", 
        JSON.stringify({username, password}),
      {
        headers: {'Content-Type' : 'application/json'},
        withCredentials: true
      }
    ); 
    setToken(response.data);
    setSuccess(true);

    }catch (exception) {
      console.log('error')
    }
  }
   
  const handleSwitch = () => {
    setSwitchB(!switchB);
  };     
 

  

  return (
    <div className="login-wrapper">
      
        <Grid container spacing = {20} justifyContent={"space-between"}>
          <Grid item xs = {6}>
                <SignUp>SignUp</SignUp>
          </Grid>
          <Grid item xs ={6}  >
            
          <section>
                <p ref={errRef} className={errorMsg ? "errmsg" :
                "offscreen"} aria-live="assertive">{errorMsg}</p>
                <h1>Log in</h1>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="usernameL">Username:</label>
                  <input
                    type="text"
                    id="usernameL"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required />

                  <label htmlFor="passwordL">Password:</label>
                  <input
                    type="password"
                    id="passwordL"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required />
                  <button>Log in </button>
                </form>
              </section>
              
              </Grid>
              
        </Grid>
          
        
    </div>     
              
      
  )

}
  

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
