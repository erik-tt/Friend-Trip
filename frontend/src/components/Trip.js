import * as React from 'react';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import Placeholder from "./files/placeholderPost.jpg";


function Trip(props){
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
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
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Hosted by: {props.owner}
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
export default Trip;