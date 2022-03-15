import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';


import Logo from './files/Header1.png';
import Avatar from "./files/avatar.png";
import Trip from "./Trip.js"




// import { Dropdown } from 'react-bootstrap';
 

function Home(props) {
 
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
    createData('Estenstadmarka','hengekøyetur','Ole','green',4,7)
  ];

  return (
    <><div>
      <img src={Logo}/>
    </div>

    

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
      <div><input type="button" onClick={handleLogout} value="Sign out" /></div></>   )
      

};   
 
export default Home;