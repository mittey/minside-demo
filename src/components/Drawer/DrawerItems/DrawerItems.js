import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const styles = theme => ({
  icon: {
    width: "30px"
  }
});

class DrawerItems extends Component {
  render = () => {
    const { classes } = this.props;

    return (
      <div>
        <ListItem button>
          <ListItemIcon>
            <Icon className={classNames(classes.icon, "far fa-address-card")} />
          </ListItemIcon>
          <ListItemText primary="Mitt medlemskap" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon className={classNames(classes.icon, "fas fa-angry")} />
          </ListItemIcon>
          <ListItemText primary="Mine verv" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon className={classNames(classes.icon, "fas fa-users")} />
          </ListItemIcon>
          <ListItemText primary="Mine vervede" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon className={classNames(classes.icon, "fas fa-building")} />
          </ListItemIcon>
          <ListItemText primary="Mitt arbeidsforhold" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon
              className={classNames(classes.icon, "fas fa-file-signature")}
            />
          </ListItemIcon>
          <ListItemText primary="Mine Kurs" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon className={classNames(classes.icon, "fas fa-handshake")} />
          </ListItemIcon>
          <ListItemText primary="Mine samtykker" />
        </ListItem>
      </div>
    );
  };
}

export default withStyles(styles)(DrawerItems);
