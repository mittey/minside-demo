import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import classNames from "classnames";
import { loadCSS } from "fg-loadcss/src/loadCSS";

import AppBar from "../../components/AppBar/AppBar";
import Drawer from "../../components/Drawer/Drawer";
import Main from "../Main/Main";

import { DRAWER_WIDTH } from "../../shared/constants";

const styles = theme => ({
  root: {
    // flexGrow: 1,
    display: "flex"
  },
  appFrame: {
    height: 430,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  appBar: {
    position: "absolute",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  "appBarShift-left": {
    marginLeft: DRAWER_WIDTH
  },
  "appBarShift-right": {
    marginRight: DRAWER_WIDTH
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    position: "relative",
    width: DRAWER_WIDTH
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  "content-left": {
    marginLeft: 0
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  "contentShift-left": {
    marginLeft: DRAWER_WIDTH
  },
  "contentShift-right": {
    marginRight: 0
  }
});

class Root extends Component {
  state = {
    drawerOpen: false
  };

  componentDidMount = () => {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#insertion-point-jss")
    );
  };

  handleDrawerOpen = () => {
    this.setState({ drawerOpen: true });
  };

  handleDrawerClose = () => {
    this.setState({ drawerOpen: false });
  };

  render() {
    const { classes } = this.props;
    const anchor = "left";

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <AppBar
              drawerOpen={this.state.drawerOpen}
              onMenuButtonClick={this.handleDrawerOpen}
            />
            <Drawer
              drawerOpen={this.state.drawerOpen}
              onCloseButtonClick={this.handleDrawerClose}
            />
            <main
              className={classNames(
                classes.content,
                classes[`content-${anchor}`],
                {
                  [classes.contentShift]: this.state.drawerOpen,
                  [classes[`contentShift-${anchor}`]]: this.state.drawerOpen
                }
              )}
            >
              <div className={classes.drawerHeader} />

              <Main />
              
            </main>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Root);
