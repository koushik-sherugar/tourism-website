import { makeStyles } from "@material-ui/styles";
import React from "react";
import PlaceCard from "./PlaceCard";
import places from "./places";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    alignItem: "centre",
    justifyContent: "center",
    margin: "20px",
    // width: "1000px",
  },
}));
export default function PlaceVisit() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <PlaceCard place={places[0]} />
        <PlaceCard place={places[1]} />
      </div>
    </>
  );
}
