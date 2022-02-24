import React, { useEffect } from 'react';

//Code used inspired by https://www.youtube.com/watch?v=brcHK3P6ChQ (sign up page tutorial)
 
function SignUp() {

  const usernameRegex = /^[a-zA-ZÆØÅæøå0-9_-]{3,30}$/;
  const passwordRegex = /^(?=.*[0-9])(?=.*[a-zæøå])(?=.*[A-ZÆØÅ])(?=.*[*.!@$%^&(){}[]:;<>,.?~_+-=|\]).{8,32}$/;

  const SignUp = () => {
    const userRef = useRef();
    const errRef = UseRef();

    const [username, setUsername] = useState('');
    const [validName, setValidUsername] = useState(false);
    const [userNameFocus, setUsernameFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPassword] = useState(false);

    const [match, setMatch] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errorMsg, setErrorMsg] = useState('');
    const [success, setSuccess] = useState(false);

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
    }, [password, match])

    useEffect(()=>{
      setErrorMsg('');
    }, [username, password, match])
  
  }
  return (
    <div>
      Welcome to the Friendtrip!
    </div>
  );
}
 
export default SignUp;