import React, { useEffect, useState } from 'react';
import axios from "axios";


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
    
    const [id, setId] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [difficulty, setDifficulty] = useState();

    /* const [owner, setOwner] = useState(); */

    useEffect(()=>{
        getData();
      }, [])
    
      async function getData() {
        await axios.get("http://localhost:8080/api/trips/"+int)
        .then((response) => {
          setId(response.data.id);
          setTitle(response.data.title);
          setDescription(response.data.description);
          setDifficulty(response.data.difficulty);
        })
      }

    const [open, setOpen] = React.useState(false);
    /* const handleClose = () => {
      setOpen(false);
    }; */
    const handleToggle = () => {
      setOpen(!open);
    };

    return(
        <><Card  onClick={handleToggle} sx={{ 
            maxWidth: 345,
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
                        Difficulty:{difficulty}km
                    </Typography>

                </CardContent>
                </Card>
            </Backdrop></>

    )
}
export default Trip;