
import {useRef, useState, useEffect, useContext} from 'react';
import axios from './api/axios';

const [userNameLog, passwordLog] = useSState('');


const Login = () => {
  
  const userRef= useRef();
  const errRef = useRef();

  const [username, checkUsername] = useState('');
  const [password, checkPassword] = useState('');
 
  const [success, setSuccess] = useState(false);
  
  useEffect(() => {
    userRef.current.focus();
  },
  [])

   
        
    //setUsername('');
    //setPassword('');
    //setSuccess(true);
    
   


  }

  return (
    <>
    {success ? (
        <section>
            <h1>Welcome to Friendrip!</h1>
            <br />
            <p>
                <a href="#">Go to Home</a>
            </p>
        </section>
    ) : (
      
    <section>
      <p ref={errRef} className={errMsg ? "errmsg" : 
      "offscreen"} aria-live="assertive">{errMsg}</p>
      <h1>Log in</h1>
      <form h >
        <label htmlFor="username">Username:</label>
        <input 
          type="text"  
          id="username" 
          ref={userRef}
          autoComplete="off"
          onChange={(e) => checkUsername(e.target.value)}
          value={username}
          required 
        />

        <label htmlFor="password">Password:</label>
        <input 
          type="password"  
          id="password" 
          onChange={(e) => axios.post()} 
          value={password}
          required 
        />
        <button>Log in</button>
        </form>
        <p>
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here, må se på denne når alt skal sys sammen*/} 
                            <a href="#">Sign Up</a>
                        </span>
                    </p>
    </section>
    )}
    </>
  )



 
export default Login;
