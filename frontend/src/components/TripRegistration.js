import React from 'react';
import {useRef, useState, useEffect} from "react";
import axios from "axios";

//Code used inspired by https://www.youtube.com/watch?v=brcHK3P6ChQ (sign up page tutorial)
 
function TripRegistration (props) {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };
    return(
        <>
        <Button onClick={handleToggle}>Show backdrop</Button>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            
        >
            <Card sx={{ maxWidth: 600 }}>
                <Button onClick={handleToggle} variant="text">X</Button>
                
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                   
                    <Typography variant="body2" color="text.secondary">
                       Hosted by: {props.owner}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                   
                    
                    <Typography variant="body2" color="text.secondary">
                        Length:{props.length}km
                    </Typography>

                </CardContent>
                </Card>
            </Backdrop></>

    )
}