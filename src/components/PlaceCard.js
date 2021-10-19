import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    // marginTop: "1.7rem",
    Width: 445,
    background: "rgba(0 , 0, 0 , 0.5)",
    margin: "20px",
  },
  Media: {
    height: "400",
  },
  title: {
    color: "#fff",
    fontSize: "1.9rem",
    fontWeight: "bold",
    fontFamily: "Nunito",
  },

  Desc: {
    fontSize: "1rem",
    // color: "#b4bdc1",
    color: "#ddd",
  },
});

export default function PlaceCard({ place }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.Media}
        component="img"
        
        alt="Contemplative Reptile"
        height="140"
        image={place.imageUrl}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h4"
          component="h1"
        >
          {place.title}
        </Typography>

        <Typography
          className={classes.Desc}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {place.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
