import React from 'react';
import {useRef, useState, useEffect} from "react";
import axios from "axios";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Backdrop from '@mui/material/Backdrop';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


 
function TripRegistration () {

    
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [difficulty, setDifficulty] = useState('1');

    const handleChange = (event) => {
      setDifficulty(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try{
          let rawToken = sessionStorage.getItem("token");
          let token = rawToken.match(/\d+/)[0] 

          //It gets the token, but it wont store the user correctly
          console.log(token)
         
          let link = ("http://localhost:8080/api/users/" + token)

         const response = await axios.post("http://localhost:8080/api/trips", 
          JSON.stringify({title, description, difficulty, link}),
          {
            headers: {'Content-Type' : 'application/json'},
            withCredentials: true
          }
        );
        console.log(response.data);

        }catch (exception) {
          console.log('error')
    
        }
      }
    
    
    const handleClose = () => {
      setOpen(false);
    };
    
    const handleToggle = () => {
      setOpen(!open);
    };
    return (
        <>
        
        <Button onClick={handleToggle}>CREATE NEW TRIP</Button>
        
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        >
        <Card sx={{ maxWidth: 600 }}>
            <Button onClick={handleToggle} variant="text">X</Button>
            <CardContent>
            <form onSubmit={handleSubmit}>
            <p>Name</p>
            <input
            id="name"
            type="text"
            autoComplete="off"
            required
            aria-describedby="uidnote"
            onChange = {(event) => setTitle(event.target.value)}
           >

            </input>
            <p>Description</p>
            <input
            id="description"
            type="text"
            autoComplete="off"
            required
            aria-describedby="uidnote"
            onChange = {(event) => setDescription(event.target.value)}
           >
            </input>

            <FormControl>
                <FormLabel id="Skill">Skill level</FormLabel>
                <RadioGroup
                 aria-labelledby="Skill-level"
                name="Skill level"
                value={difficulty}
                onChange={handleChange}
            >
                <FormControlLabel value="1" control={<Radio />} label="Amateur" />
                <FormControlLabel value="2" control={<Radio />} label="Intermediate" />
                <FormControlLabel value="3" control={<Radio />} label="Pro" />
              </RadioGroup>
            </FormControl>

            <button type="submit">Submit</button>
            </form>
            </CardContent>
            </Card>
            
        </Backdrop>

    </>
    )
}
export default TripRegistration;