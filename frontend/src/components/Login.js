
import {useRef, useState, useEffect, useContext} from 'react';
import axios from "axios";
import Logo from './files/Header2.png';


//const [userNameLog, passwordLog] = useState('');

//https://www.youtube.com/watch?v=X3qyxo_UTR4&t=1582s code inspired by this tutorial

const Login = () => {
  
  const userRef= useRef();
  const errRef = useRef();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);
  
  useEffect(() => {
    userRef.current.focus();
  },[])

  useEffect(() => {
   setErrorMessage('');
  },[username, password])

  const handleSubmit = async (event) => {
    event.preventDefault();

    /*try{
      const response = await axios.post("http://localhost:8080/api/login", 
      JSON.stringify({username, password}),
      {
        headers: {'Content-Type' : 'application/json'},
        withCredentials: true
      }
    );
    console.log(response.data);
    setSuccess(true);

    }catch (exception) {
    */
    setUsername('');
    setPassword('');
    setSuccess(true);
    
  }
   
        
 

  

  return (
    <><div className="split left">
        <div className="centered">
          <img height={"400px"} src={Logo} />
        </div>
      </div>
        <>
        <div className="split right">
            <div className="centered">
        {success ? (
          
              <section>
                <h1>Welcome to Friendrip!</h1>
                <br />
                <p>
                  <a href="/Home">Go to Home</a>
                </p>
              </section>
            
            ) : (

              <section>
                {/* <p ref={errRef} className={errMsg ? "errmsg" :
                "offscreen"} aria-live="assertive">{errMsg}</p> */}
                <h1>Log in</h1>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required />

                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required />
                  <button>Log in</button>
                </form>
                <p>
                  Need an Account?<br />
                  <span className="line">
                    <a href="/SignUp">Sign Up</a>
                  </span>
                </p>
              </section>
             

        )}
         </div>
              </div>
      </></>
  )

    }

 
export default Login;
