import React, { Component } from "react";

import GridItem from "../../components/GridContainer/GridItem/GridItem";
import GridContainer from "../../components/GridContainer/GridContainer";
import NavigationCard from "../../components/NavigationCard/NavigationCard";

class Main extends Component {
  render() {
    return (
      <GridContainer>
        <GridItem xs={12} sm={6} md={4}>
          <NavigationCard
            iconClass="fa-address-card"
            cardHeaderText="Mitt medlemskap"
            cardBodyText="Informasjon om innmeldtdatoer, forsikringer og betalingsstatus "
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <NavigationCard
            iconClass="fa-angry"
            cardHeaderText="Mine verv"
            cardBodyText="Informasjon dine aktive verv.Er du leder kan du redigere forumet du er leder for"
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <NavigationCard
            iconClass="fa-building"
            cardHeaderText="Mine vervede"
            cardBodyText="Informasjon om antall vervede medlemmer og vervepremier"
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <NavigationCard
            iconClass="fa-building"
            cardHeaderText="Mitt arbeidsforhold"
            cardBodyText="Oversikt over arbeidsgiveren din og de tariffavtaler som gjelder"
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <NavigationCard
            iconClass="fa-building"
            cardHeaderText="Mine Kurs"
            cardBodyText="Informasjon om gjennomførte kurs og kurskalender"
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <NavigationCard
            iconClass="fa-building"
            cardHeaderText="Mine samtykker"
            cardBodyText="Oversikt over de samtykker du har gitt i forhold til kommunikasjon med forbundet og samarbeidspartnere"
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default Main;
