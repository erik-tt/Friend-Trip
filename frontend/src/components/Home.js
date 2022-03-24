import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TripRegistration from "./TripRegistration.js"

import Logo from './files/Header1.png';
import Avatar from "./files/avatar.png";
import Trip from "./Trip.js"

import { Link } from 'react-router-dom'




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

    <h2>Hello {username}</h2>    

    <TripRegistration>TripReg</TripRegistration>

    <div>
    <img src={Avatar}  height={50}></img>
    </div><br/>
    
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
      
      <Button variant="contained" onClick={() => sessionStorage.clear()}>
        <Link to={'/login'} className="nav-link">Sign Out</Link>
      </Button>
      </>)
      
};   
 
export default Home;