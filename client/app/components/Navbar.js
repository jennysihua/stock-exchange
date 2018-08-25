import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import {Link} from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10
  },
  navBar: {
    display: "flex",
    justifyContent: "space-between",
    background: "linear-gradient(45deg, #F15F79 3%, #ff7e5f 20%, #feb47b 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  }
}

const Navbar = props => {
  return (
    <div>
      <AppBar position="fixed" style={styles.navBar}>
        <Toolbar variant="dense" style={styles.color}>
          <Typography variant="title" color="inherit">
            Stock Exchange
          </Typography>
          <Link to="/portfolio">
            <Button color="inherit">Portfolio</Button>
          </Link>
          <Link to="/portfolio">
            <Button color="inherit">Performance</Button>
          </Link>
          <IconButton color="inherit" aria-label="Menu">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
