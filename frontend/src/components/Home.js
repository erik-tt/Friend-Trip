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
  function createData(name, difficulty, length) {
    return { name, difficulty, length };
  }
  
  //verdier, men vi skal hente data i steden for å create data
  const rows = [
    createData('Blåfjell', 'rød', 6),
    createData('Simosete', 'blå', 4),
    createData('Molden', 'svart', 8),
  ];

  return (
    <><div>
      <img src={Logo}/>
    </div>

    

    <div>
    <select>
      <option value="profil">Min profil</option>
    </select>
    </div><br/>

    <div>
      Oversikt over turer:<br/><br/>
    </div>
    <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="table">   
            <TableHead>
              <TableRow>
                <TableCell>Navn</TableCell>
                <TableCell align="right">Beskrivelse</TableCell>
                <TableCell align="right">Ansvarlig</TableCell>
                <TableCell align="right">Vanskelighetsgrad</TableCell>
                <TableCell align="right">Lengde&nbsp;(km)</TableCell>
                <TableCell align="right">Medlemmer</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.vanskelighetsgrad}</TableCell>
                  <TableCell align="right">{row.lengde}</TableCell>
                  <TableCell align="right">{row.medlemmer}</TableCell>
                  <TableCell align="right">{row.ansvarlig}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div> <br/>
      <div><input type="button" onClick={handleLogout} value="Logg ut" /></div></>   )

};   
 
export default Home;