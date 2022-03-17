import React, {useRef, useState, useEffect, useContext} from 'react';
import useToken from './useToken';
import axios from "axios";
import PropTypes from 'prop-types';




function Profile(props) {
    const { token } = useToken();
  
    const [data, setData] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [bio, setBio] = useState();
    
    const absToken = Math.abs(token);
  
    useEffect(()=>{
      getData();
    }, [])
  

    
    async function getData() {
      await axios.get("http://localhost:8080/api/users/" + absToken)
      .then((response) => {
        setData(response.data);
        setUsername(response.data.username)
        setPassword(response.data.password)
        setBio(response.data.bio)
      })
    }
    

    /*const handleSetBio = async (e) => {
        e.preventDefault();
    
        try{
          const response = await axios.post("http://localhost:8080/api/users", 
          JSON.stringify({bio}),
          {
            headers: {'Content-Type' : 'application/json'},
            withCredentials: true
          }
        );
        console.log(response.data);
        setSuccess(true);
    
        }catch (exception) {
    
    
        }
      }*/


return (
<div> 
<h2>Username</h2>
{username}
<h2>Password</h2>
{password}
<h2>Biograph</h2>
{bio}

<input id="biograph"></input>
<button >Save</button>
</div>



);

}
export default Profile;