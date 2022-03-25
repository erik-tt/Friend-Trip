import React, { useEffect, useState } from 'react';
import axios from "axios";

import useToken from './useToken';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import Placeholder from "./files/placeholderPost.jpg";
/* 
@OneToOne private final User owner;
private String title;
private String description;
private int difficulty;



 */


function Trip(int) {
    
    const { token } = useToken();
    const [id, setId] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [difficulty, setDifficulty] = useState();
    const [role, setRole] = useState();
    
    const absToken = Math.abs(token);

    /* const [owner, setOwner] = useState(); */

    useEffect(()=>{
        getData();
        getRole();
      }, [])

      async function getRole() {
        await axios.get("http://localhost:8080/api/users/" + absToken)
        .then((response) => {
          setRole(response.data.role)
        })
      }
    
      async function getData() {
        await axios.get("http://localhost:8080/api/trips/"+int)
        .then((response) => {
          setId(response.data.id);
          setTitle(response.data.title);
          setDescription(response.data.description);
          setDifficulty(response.data.difficulty);
        })
    }
    async function hideDeleteButton() {
        if (role === 'ADMIN') {
            document.getElementById("deleteButton").style.display = "block";
        } else {
            document.getElementById("deleteButton").style.display = "none";
        }
      }

    const [open, setOpen] = React.useState(false);
    /* const handleClose = () => {
      setOpen(false);
    }; */
    const handleToggle = () => {
      setOpen(!open);
      hideDeleteButton();
    };

    async function handleDelete() {
        if (role === 'ADMIN') {
            await axios.delete("http://localhost:8080/api/trips/"+int)
            .then(alert('Delete success'));
            window.location.reload();
        }
        else{
            alert('Only admin can delete trips');
        }
    }


    if(title!= null){
    return(
        <><Card onClick={handleToggle}  sx={{ 
            //maxWidth: 345,
            margin: '4%'
            
             }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={Placeholder}
                    alt="soria moria" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Hosted by: {"owner"}
                    </Typography>
                    
                    
                </CardContent>

            </CardActionArea>
        </Card>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            
        >
            <Card sx={{ maxWidth: 600 }}>
                <Button onClick={handleToggle} variant="text">X</Button>
                <Button id="deleteButton" onClick={handleDelete} variant="text">Delete</Button>
                
                <CardMedia
                    component="img"
                    height="300"
                    image={Placeholder}
                    alt="soria moria" />
               
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       Hosted by: {"owner"}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                   
                    
                    <Typography variant="body2" color="text.secondary">
                        Difficulty:{difficulty}
                    </Typography>

                </CardContent>
                </Card>
            </Backdrop></>

    ) } else {
        return(<></>)
    }
}
export default Trip;