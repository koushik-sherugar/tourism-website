import { React, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Stop } from "@material-ui/icons";
import { IconButton, Collapse } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
    // position: "absolute",
    // width: "90%",
    // margin: "auto",
    // background: "transparent",
  },
  Appbar: {
    // background: "none",
    background: "rgba(0, 0, 0, 0.26)",
  },
  AppbarWrapper: {
    width: "90%",
    margin: "auto",
  },
  AppbarHeading: {
    flexGrow: "1",
    fontFamily: "Nunito",
  },
  HeadingColor: {
    color: "#5ace45",
  },
  AppBarIcon: {
    margin: "0 1rem 0 0",
    fontSize: "2rem",
  },
  title: {
    color: "white",
    fontSize: "4rem",
  },
  container: {
    textAlign: "center",
  },

  //
  goDown: {
    color: "#5ace45",
    fontSize: "3rem",
  },
}));
export default function Header() {
  const classes = useStyles();
  const [moveDown, setMoveDown] = useState(false);
  useEffect(() => {
    setMoveDown(true);
  }, []);
  return (
    <>
      <div className={classes.root}>
        <AppBar className={classes.Appbar} position="fixed" elevation={0}>
          <Toolbar className={classes.AppbarWrapper}>
            <Typography variant="h4" className={classes.AppbarHeading}>
              TRVL
              <span className={classes.HeadingColor}>
                <Stop color="inherent" />
              </span>
            </Typography>
            <IconButton className={classes.AppBarIcon} color="inherit">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Collapse
          in={moveDown}
          {...(moveDown ? { timeout: 1000 } : {})}
          collapsedHeight={50}
        >
          <div className={classes.container}>
            <h1 className={classes.title}>
              Welcome to The <br />
              World Of &nbsp;
              <span className={classes.HeadingColor}>Expedition.</span>
            </h1>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </div>
        </Collapse>
      </div>
    </>
  );
}
