import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Logo from './files/Header1.png';

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
    createData('Molden', 'Topptur ', 'Andrea', 'black', 8, 15)
  ];

  return (
    <><div>
      <img src={Logo}/>
    </div>

    

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
      <div><input type="button" onClick={handleLogout} value="Sign out" /></div></>   )

};   
 
export default Home;