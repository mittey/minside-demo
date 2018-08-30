import React, { Component } from "react";

import GridItem from "../../components/GridContainer/GridItem/GridItem";
import GridContainer from "../../components/GridContainer/GridContainer";
import NavigationCard from "../../components/NavigationCard/NavigationCard";

class Main extends Component {
  render() {
    return (
      <GridContainer>
        <GridItem xs={12} sm={6} md={4}>
          <NavigationCard iconClass="fa-address-card" />
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <NavigationCard iconClass="fa-angry" />
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <NavigationCard iconClass="fa-building" />
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <NavigationCard iconClass="fa-building" />
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <NavigationCard iconClass="fa-building" />
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <NavigationCard iconClass="fa-building" />
        </GridItem>
      </GridContainer>
    );
  }
}

export default Main;
