import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Logo from './files/Header1.png';

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
    createData('Molden', 'Topptur ', 'Andrea', 'black', 8, 15)
  ];

  return (
    <h2><div>
      <img src={Logo}/>
    </div>
    <h3>Hello {username}</h3>

    

    <div>
    <select>
      <option value="profil">My profile</option>
    </select>
    </div><br/>

    <div>
      Trips:<br/><br/>
    </div>
    <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="table">   
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="left">Owner</TableCell>
                <TableCell align="left">Difficulty</TableCell>
                <TableCell align="left">Length&nbsp;(km)</TableCell>
                <TableCell align="left">Members</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.description}</TableCell>
                  <TableCell align="left">{row.owner}</TableCell>
                  <TableCell align="left">{row.difficulty}</TableCell>
                  <TableCell align="left">{row.length}</TableCell>
                  <TableCell align="left">{row.members}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div> <br/>
      <div><input type="button" onClick={handleLogout} value="Sign out" /></div></h2>   )

};   
 
export default Home;