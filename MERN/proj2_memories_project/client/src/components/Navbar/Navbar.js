import React, { useState, useEffect } from "react";
import { AppBar, Typography, Avatar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import decode from "jwt-decode";
import memories from "../../images/memories.png";
import { useNavigate, useLocation } from "react-router";
// google sign in is not working... will try to resolve with seniors later.

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile"))); //get user from local storage
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(
    () => {
      //to refresh on login
      const token = user?.token;
      if (token) {
        const decodedToken = decode(token);

        if (decodedToken.exp * 1000 < new Date().getTime()) {
          logout();
        }

        setUser(JSON.parse(localStorage.getItem("profile")));
      }
    },
    [
      location,
    ] /*on location change run this to set user. No no need to refresh to get profile in navbar on login */
  );

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link} /* to send to home page */
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </div>
      <Toolbar className={classes.toolbar}>
        {user /* user exist? */ ? (
          <div className={classes.profile}>
            <Avatar /* displaying user info. if img not there just put charact */
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
