import React from 'react';
import {useRef, useState, useEffect} from "react";
import axios from "axios";
import Checkbox from '@mui/material/Checkbox';
import { FormGroup } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

//Code used inspired by https://www.youtube.com/watch?v=brcHK3P6ChQ (sign up page tutorial)
 
const usernameRegex = /^[a-zA-ZÆØÅæøå0-9_-]{3,30}$/;
const passwordRegex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

const SignUp = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState('');
  const [validName, setValidUsername] = useState(false);
  const [userNameFocus, setUsernameFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const [companyName, setCompanyName] = useState('');
  const [commercialUserFocus, setCommercialUserFocus] = useState(false);
  
  const [role, setRole] = useState('USER');
  

  
  // const role = "USER";
  const bio ="";

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(()=>{
    const result = usernameRegex.test(username);
    console.log(result);
    console.log(username);
    setValidUsername(result);
  }, [username])

  useEffect(()=>{
    const result = passwordRegex.test(password);
    console.log(result);
    console.log(password);
    setValidPassword(result);
    const match = password === matchPassword;
    setValidMatch(match);
  }, [password, matchPassword])

  useEffect(()=>{
    setErrorMsg('');
  }, [username, password, matchPassword])

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    try{
      const response = await axios.post("http://localhost:8080/api/users", 
      JSON.stringify({username, password, role, companyName, bio}),
      {
        headers: {'Content-Type' : 'application/json'},
        withCredentials: true
      }
    );
    console.log(response.data);
    setSuccess(true);

    }catch (exception) {
      console.log('error');

    }
  }

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (!checked){
      setRole('COMMERCIAL')
    }
    else{
      setRole('USER')
    }
  };

  return (
    <>
    <section>
      <p ref={errRef} className={errorMsg ? "errmsg" :"offscreen"} aria-live="assertive">{errorMsg}</p>
      <h1>
        Register
      </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
        </label>
        <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                required
                onChange = {(event) => setUsername(event.target.value)}
                aria-invalid={validName ? "false": "true"}
                aria-describedby="uidnote"
                onFocus={() => setUsernameFocus(true)}
                onBlur={() => setUsernameFocus(false)}>
        </input>
        <p id="uidnote" className={userNameFocus && username && !validName ? "instructions" : "offscreen"}>
          Invalid username: Username must be between 3-30 characters containing only letters, numbers, _ or -

        </p>
        <label htmlFor="password">
          Password:
        </label>
        <input
                type="password"
                id="password"
                required
                onChange = {(event) => setPassword(event.target.value)}
                //aria-invalid={validName ? "false": "true"}
                aria-describedby="passwordnote"
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}>
        </input>
        <p id="passwordnote" className={passwordFocus && password && !validPassword ? "instructions" : "offscreen"}>
          Weak password
        </p>
        <label htmlFor="confirm">
          Re-Enter Password:
        </label>
        <input
                type="password"
                id="confirm"
                required
                onChange = {(event) => setMatchPassword(event.target.value)}
                aria-invalid={validName ? "false": "true"}
                aria-describedby="matchidnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}>
        </input>
        <p id="matchidnote" className={matchFocus && matchPassword && !validMatch ? "instructions" : "offscreen"}>
          Does not match
        </p>
        <FormGroup>
            <FormControlLabel control={<Checkbox 
            checked={checked} 
            onChange= {handleChange} 
            inputProps={{ 'aria-label': 'controlled' }} />} label="Commercial User" />
        </FormGroup>

        <input disabled={!checked ? true : false}
                placeholder = "Company Name"
                type="text"
                id="commercialUser"
                autoComplete="off"
                required
                onChange = {(event) => setCompanyName(event.target.value)}
                aria-describedby="commercialidnote"
                onFocus={() => setCommercialUserFocus(true)}
                onBlur={() => setUsernameFocus(false)}>
        </input>

        <button disabled={!validName || !validPassword || !validMatch ? true : false}>
          Sign Up!
        </button>
      </form>
    </section>
    </>
  );
}


 
export default SignUp;