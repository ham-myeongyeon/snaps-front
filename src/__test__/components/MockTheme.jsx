import React from "react";
import { ThemeProvider } from "styled-components";
import GrobalStyles from "../../styles";
import theme from "../../styles/theme";

function MockTheme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GrobalStyles />
      {children}
    </ThemeProvider>
  );
}

export default MockTheme;
