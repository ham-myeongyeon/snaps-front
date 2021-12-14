import React from "react";
import styled, { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles";
import theme from "./styles/theme";

import SwiperBox from "./components/SwiperBox";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <SwiperBox />
        <OptionsBox>Options</OptionsBox>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  width: 1140px;
  height: 100%;
  border: 1px blue solid;
  margin: 0 auto;
`;

const OptionsBox = styled.div`
  width: 320px;
`;

export default App;
