import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TripRegistration from "./TripRegistration.js"
import Profile from "./Profile"

import Logo from './files/Header1.png';
import Avatar from "./files/avatar.png";
import Trip from "./Trip.js"

import { Link } from 'react-router-dom'




import useToken from './useToken';
import axios from "axios";

// import { Dropdown } from 'react-bootstrap';
 

function Home(props) {
  const  { token } = useToken();

  const [data, setData] = useState();
  const [username, setUsername] = useState();
  const [tripCount, setTripCount] = useState();
  const [trips, setTrips] = useState(Array.from({length: 50}, (_, i) => i + 1))
 
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
    getTripCount();
  }, [])

  async function getTripCount() {
    await axios.get("http://localhost:8080/api/trips")
    .then((response) => {
      setTripCount(response.data.page.totalElements);
    })
    
  }
  //noke med design
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  function signOut() {
    localStorage.clear();
    setTimeout(() => {  window.location.reload()}, 100);
  }

  const classes = useStyles();


  return (
    <>
   
      <div width= "100%">
      <img src={Logo}/>
      </div>

    <h2>Hello {username}
    <Profile>Profile</Profile>
    </h2>

     
    <div>
    <TripRegistration>TripReg</TripRegistration>
    </div>


    
    
    <div id="grid" sx={{ 
      
    }}>
       
    
    <Grid container spacing={1}>

    {trips.map((trip) =>
          <Grid xs={4}>
            {Trip(trip)}
          </Grid>
        )}
    </Grid>
      </div>
      
      <Button variant="contained" onClick={() =>  signOut()}>
        Sign Out
      </Button>
      </>)
      
};   
 
export default Home;