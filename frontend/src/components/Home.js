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

  const handleCreateTrip = () => {
    props.history.push('/Home/TripRegistration')
  }

  const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
  const handleToggle = () => {
    setOpen(!open);
  }; 

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

  
  //15.03.22
  const  getAllTrips = () => {
    const[trips, getTrips] = useState(''); 

    useEffect(() => {
      getAllTrips();
    }, []); 

    axios.get(`$'http://localhost:8080/trips`)
    .then((response) => {
      const allTrips = response.data.trips.allTrips;
      //adder data til state
      getTrips(allTrips); 
    })
    .catch(error => console.error(`Error: ${error}`));
   
  }


  
  
  
  //verdier, men vi skal hente data i steden for å create data
  const rows = [
    createData('Blåfjell', 'Telttur', 'Philip', 'red', 6, 6),
    createData('Simosete', 'Skitur', 'Erik', 'blue', 4, 2),
    createData('Molden', 'Topptur ', 'Andrea', 'black', 8, 15),
    createData('Estenstadmarka','hengekøyetur','Ole','green',4,7),
  ];

  return (
    <h2><div>
      <img src={Logo}/>
    </div>
    <h3>Hello {username}</h3>

    <Trip trips={trips}/>

    <div>
    <img src={Avatar}  height={50}></img>
    </div><br/>
    <Button onClick={handleToggle}>CREATE NEW TRIP</Button>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            
        >
            <Card sx={{ maxWidth: 600 }}>
                <Button onClick={handleToggle} variant="text">X</Button>
               
                <CardContent>
                <p>Name</p>
                <input
                type="text"
                autoComplete="off"
                required
                aria-describedby="uidnote"
               >
                </input>
                <p>Description</p>
                <input
                type="text"
                autoComplete="off"
                required
                aria-describedby="uidnote"
               >
                </input>
                </CardContent>
                </Card>
            </Backdrop>
    <div>
      Trips<br/><br/>
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
      <div><input type="button" onClick={handleLogout} value="Sign out" /></div></h2>   )
      

};   
 
export default Home;