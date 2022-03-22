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
import Profile from "./Profile"

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
  const [tripCount, setTripCount] = useState();
  const trips = [Trip(2), Trip(3), Trip(4)];

 
  const absToken = Math.abs(token);

  useEffect(()=>{
    getUser();
  }, [])

  async function getUser() {
    await axios.get("http://localhost:8080/api/users/" + absToken)
    .then((response) => {
      setData(response.data);
      setUsername(response.data.username)
    })
  }

  useEffect(()=>{
    getTrips();
  }, [])

  async function getTrips() {
    await axios.get("http://localhost:8080/api/trips")
    .then((response) => {
      setTripCount(response.data.page.totalElements);
    })
  }
  
 
  // handle click event of logout button
  const handleLogout = () => {    
    props.history.push('/');
  }  

  const handleGoToProfile = () => {    
    props.history.push('/Profile');
  }

  //noke med design
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const classes = useStyles();


  return (
    <>
   
      <div>
      <img src={Logo}/>
      </div>

    <h2>Hello {username}
    <Button>
    <img src={Avatar} onClick={handleGoToProfile} height={50}></img>
    </Button>   </h2>

     

    <TripRegistration>TripReg</TripRegistration>

    
    <div>
      Trips<br/><br/>
    </div>
    <div id="grid" sx={{
      
    }}>
       
    
    <Grid container spacing={5}>

    {trips.map((trip) =>
          <Grid xs={4}>
            {Trip(2)}
          </Grid>
        )}
      </Grid>
      </div>
      
      <div><input type="button" onClick={handleLogout} value="Sign out" /></div>  
      </>)
      
};   
 
export default Home;