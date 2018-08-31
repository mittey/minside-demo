import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import ButtonBase from "@material-ui/core/ButtonBase";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  card: {
    display: "flex",
    marginBottom: "20px",
    minHeight: "160px"
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
  typographyBody: {
    display: "block",
    verticalAlign: "middle",
    textAlign: "left"
  },
  typography: {
    display: "inline",
    verticalAlign: "middle"
  },
  icon: {
    width: "auto",
    // marginRight: "20px",
    verticalAlign: "middle",
    fontSize: "40px"
  },
  cardButton: {
    width: "-webkit-fill-available"
  }
});

class NavigationCard extends Component {
  render() {
    let { classes } = this.props;

    return (
      <Card className={classes.card}>
        <ButtonBase className={classes.cardButton}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Grid container spacing={16}>
                <Grid item xs={3} >
                  <Icon
                    className={classNames(
                      classes.icon,
                      `far ${this.props.iconClass}`
                    )}
                  />
                </Grid>
                <Grid item xs={9} sm container>
                  <Typography className={classes.typography} variant="title">
                    {this.props.cardHeaderText}
                  </Typography>
                  <Typography
                    className={classes.typographyBody}
                    variant="body1"
                  >
                     {this.props.cardBodyText}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </div>
        </ButtonBase>
      </Card>
    );
  }
}

export default withStyles(styles)(NavigationCard);
