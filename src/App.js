import React, { Component } from "react";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import pink from "@material-ui/core/colors/pink";

import Root from "./containers/Root/Root";

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: pink
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Root />
      </MuiThemeProvider>
    );
  }
}

export default App;
