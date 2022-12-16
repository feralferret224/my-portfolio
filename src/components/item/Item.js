import './Item.css';
import 'react-awesome-button/dist/styles.css';

import React from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
import { AwesomeButton } from "react-awesome-button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import { CardActionArea } from '@mui/material';

import { Outlet, Link } from "react-router-dom";


const blue = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};


// const styles = muiBaseTheme => ({
//   card: {
//     maxWidth: 300,
//     margin: "auto",
//     transition: "0.3s",
//     boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
//     "&:hover": {
//       boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
//     }
//   },
//   media: {
//     paddingTop: "56.25%"
//   },
//   content: {
//     textAlign: "left",
//     padding: muiBaseTheme.spacing.unit * 3
//   },
//   divider: {
//     margin: `${muiBaseTheme.spacing.unit * 3}px 0`
//   },
//   heading: {
//     fontWeight: "bold"
//   },
//   subheading: {
//     lineHeight: 1.8
//   },
//   avatar: {
//     display: "inline-block",
//     border: "2px solid white",
//     "&:not(:first-of-type)": {
//       marginLeft: -muiBaseTheme.spacing.unit
//     }
//   }
// });


function Item({project}) {

  return (
    <div className="Item">
      {/* <div class="card" >
        <img class="card-img-top" src={project.projImg} alt="Card image cap"/>
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div> */}
      <Card >
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            // image={
            //   "https://i.ibb.co/BVx80MR/site.png"
            // }
            image={project.projImg}
          />
          <CardContent>
            <Typography
              className={"MuiTypography--heading"}
              variant={"h6"}
              gutterBottom
              align='left'
            >
              {project.name}
            </Typography>
            <Typography
              className={"MuiTypography--subheading"}
              variant={"subtitle1"}
              align='left'
            >
              {project.blurb}
            </Typography>
            <Typography className={"MuiTypography--subheading"} variant={"subtitle1"} color="text.secondary">
              <br />
              {project.tools}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
    
  );
}


export default Item;
