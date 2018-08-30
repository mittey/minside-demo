import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import AccountCircle from "@material-ui/icons/AccountCircle";

import { DRAWER_WIDTH } from "../../shared/constants";
import nnnLogo from "../../assets/nnn_logo.jpg";

const styles = theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  }
});

class MenuAppBar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar
        position="absolute"
        className={classNames(
          classes.appBar,
          this.props.drawerOpen && classes.appBarShift
        )}
        title={<img alt="NNN Logo" src={nnnLogo} />}
      >
        <Toolbar
          disableGutters={!this.props.drawerOpen}
          className={classes.toolbar}
        >
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.props.onMenuButtonClick}
            className={classNames(
              classes.menuButton,
              this.props.drawerOpen && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="title"
            color="inherit"
            noWrap
            className={classes.title}
          >
            NNN
          </Typography>
          <IconButton aria-haspopup="true" color="inherit">
            <AccountCircle />
          </IconButton>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(MenuAppBar);
