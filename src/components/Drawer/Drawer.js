import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DrawerItems from "../../components/Drawer/DrawerItems/DrawerItems";

import { DRAWER_WIDTH } from "../../shared/constants";

const styles = theme => ({
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: DRAWER_WIDTH,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  }
});

class TemporaryDrawer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Drawer
        classes={{
          paper: classNames(
            classes.drawerPaper,
            !this.props.drawerOpen && classes.drawerPaperClose
          )
        }}
        open={this.props.drawerOpen}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={this.props.onCloseButtonClick}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <DrawerItems />
        </List>
      </Drawer>
    );
  }
}

export default withStyles(styles)(TemporaryDrawer);
