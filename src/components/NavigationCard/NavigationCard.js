import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { CardActions } from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";

const styles = theme => ({
  card: {
    display: "flex",
    marginBottom: "20px"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151,
    height: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  },
  typography: {
    display: "inline",
    verticalAlign: "middle"
  },
  icon: {
    width: "30px",
    marginRight: "20px",
    verticalAlign: "middle"
  },
  iconButton: {
    marginRight: "20px"
  }
});

class NavigationCard extends Component {
  render() {
    let { classes } = this.props;

    return (
      <Card className={classes.card}>
        <ButtonBase>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Icon
                className={classNames(
                  classes.icon,
                  `far ${this.props.iconClass}`
                )}
              />
              <Typography className={classes.typography} variant="title">
                test test test
              </Typography>
            </CardContent>
            <div className={classes.controls} />
          </div>
        </ButtonBase>
      </Card>
    );
  }
}

export default withStyles(styles)(NavigationCard);
