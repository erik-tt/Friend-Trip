import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Placeholder from "./files/placeholderPost.jpg";
import Backdrop from '@mui/material/Backdrop';
import TripRegistration from "./TripRegistration.js"

import Logo from './files/Header1.png';
import Avatar from "./files/avatar.png";
import Trip from "./Trip.js"




import useToken from './useToken';
import axios from "axios";

// import { Dropdown } from 'react-bootstrap';
 

function Home(props) {
  const { token } = useToken();

  const [data, setData] = useState();
  const [username, setUsername] = useState();

  const absToken = Math.abs(token);

  useEffect(()=>{
    getData();
  }, [])

  async function getData() {
    await axios.get("http://localhost:8080/api/users/" + absToken)
    .then((response) => {
      setData(response.data);
      setUsername(response.data.username)
    })
  }
 
  // handle click event of logout button
  const handleLogout = () => {    
    props.history.push('/');
  }  

  //noke med design
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const classes = useStyles();
  
  //skal hente data i steden for å create
  function createData(name, description, owner, difficulty, length, members) {
    return { name, description, owner, difficulty, length, members };
  }
  
  
  
  //verdier, men vi skal hente data i steden for å create data
  const rows = [
    createData('Blåfjell', 'Telttur', 'Philip', 'red', 6, 6),
    createData('Simosete', 'Skitur', 'Erik', 'blue', 4, 2),
    createData('Molden', 'Topptur ', 'Andrea', 'black', 8, 15),
    createData('Estenstadmarka','hengekøyetur','Ole','green',4,7),
  ];

  return (
    <>
   
      <div>
      <img src={Logo}/>
      </div>

    <h2>Hello {username}</h2>    

    <TripRegistration>TripReg</TripRegistration>

    <div>
    <img src={Avatar}  height={50}></img>
    </div><br/>
    
    <div>
      Trips:<br/><br/>
    </div>
    <div id="grid" sx={{
      
    }}>
      <Grid container spacing={1}>
      {rows.map((row) => (
        <Grid item xs={4}>
          {Trip(row)}
        </Grid>
      
      ))}

      </Grid>
      </div>
      <div><input type="button" onClick={handleLogout} value="Sign out" /></div>
      </>  
      )
      

};   
 
export default Home;