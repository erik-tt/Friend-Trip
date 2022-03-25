import React, {useRef, useState, useEffect, useContext} from 'react';
import useToken from './useToken';
import axios from "axios";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Backdrop from '@mui/material/Backdrop';
import Grid from '@mui/material/Grid';



import Avatar from "./files/avatar.png";





function Profile(props) {
    const { token } = useToken();
    const [open, setOpen] = React.useState(false);
    const [openBio, setOpenBio] = React.useState(false);

    const [username, setUsername] = useState();
    const [role, setRole] = useState();
    const [password, setPassword] = useState();
    const [bio, setBio] = useState();
    const [success, setSuccess] = useState(false);
    
    const absToken = Math.abs(token);
  
    useEffect(()=>{
      getData();
    }, [])
  

    
    async function getData() {
      await axios.get("http://localhost:8080/api/users/" + absToken)
      .then((response) => {
        setRole(response.data.role)
        setUsername(response.data.username)
        setPassword(response.data.password)
        setBio(response.data.bio)
      })
    }
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try{
        const response = await axios.put("http://localhost:8080/api/users/" + absToken,
          JSON.stringify({username, password, role, bio}),
        {
          headers: {'Content-Type' : 'application/json'},
          withCredentials: true
        }
      ); 
      setSuccess(true);
  
      }catch (exception) {
     /*
      setUsername('');
      setPassword('');
      setSuccess(true);
      */
      }
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

      const handleToggle = () => {
        setOpen(!open);
      };

      const handleToggleBio = () => {
        setOpenBio(!openBio);
      };


return (
  <>
  <Button>
  <img src={Avatar} onClick={handleToggle} height={50}></img>
  </Button>

  <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={open}
    >
    <Card sx={{ width: 800 }}>
    <Button onClick={handleToggle} variant="text">X</Button>
      <div style={{padding: "20%"}}>
      <img src={Avatar} height={50}></img>
      <h3>Username:</h3>
      <h2>{username}</h2>
      <h3>Bio:</h3>
      <p >{bio}</p>

      <br/> 
      <Button onClick={handleToggleBio}>Change bio</Button>
      </div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBio}
        >

        <Card sx={{ maxWidth: 600 }}>
        <Button onClick={handleToggleBio} variant="text">X</Button> 
        <CardContent>
        <h2>
        <div> 
              
              
          

          <textarea id="biograph" onInput = {(event) => setBio(event.target.value)}></textarea><br/>
          <button onClick={handleSubmit}>Save</button>
          </div>
          </h2>
          </CardContent>
        </Card>
      </Backdrop>
    </Card>
  </Backdrop>

  
  

  

</>
);

}

export default Profile;