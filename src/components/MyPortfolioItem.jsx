import React,{useState} from 'react';
import {Link} from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const MyPortfolioItem = ({img,title,details}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="200"
        width="200"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {details.map(({icon,title,desc},index)=>{
                                return(
                                    <li className="modal__item" key={index}>
                                        <span className="item__icon">{icon}</span>
                                        <div>
                                            <spoan className="item__title">{title}</spoan>
                                            <span className="item__desc"><Link to={desc}>{desc}</Link></span>
                                        </div>
                                    </li>
                                )
                            })}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Demo
      </Button>
    </CardActions>
  </Card>
  );
}

export default MyPortfolioItem;
