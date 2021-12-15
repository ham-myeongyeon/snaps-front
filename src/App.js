import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles";
import theme from "./styles/theme";

import optionsMock from "./Mockup/options.json";

import SwiperBox from "./components/SwiperBox";
import OptionsBox from "./components/OptionsBox";

function App() {
  const [optionDatas, setOptionDatas] = useState([]);
  const [currentOption, setCurrentOption] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const initialOption = optionsMock?.reduce((result, option) => {
      const title = option["title"];
      const label = option.child[0]["label"];

      const current = { [title]: label };

      return Object.assign(result, current);
    }, {});

    setOptionDatas(optionsMock);
    setCurrentOption({ ...initialOption, 수량: 1 });
  }, [optionsMock]);

  useEffect(() => {
    if (!Object.values(currentOption).length) {
      return;
    }

    setCurrentOption({
      ...currentOption,
      수량: quantity,
    });
  }, [quantity]);

  function handleCurrentOption(title, select) {
    setCurrentOption({
      ...currentOption,
      [title]: select,
    });
  }

  function handlePlusQuantity() {
    if (quantity === 999) {
      return;
    }

    const result = quantity + 1;

    setQuantity(result);
  }

  function handleMinusQuantity() {
    if (quantity === 1) {
      return;
    }

    const result = quantity - 1;

    setQuantity(result);
  }

  function handleTypeQuantity(e) {
    const input = Number(e.target.value);

    if (input > 999 || input < 0) {
      return;
    }

    setQuantity(input);
  }

  function handleCreate() {
    console.log(currentOption);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <SwiperBox />
        <OptionsBox
          optionDatas={optionDatas}
          currentOption={currentOption}
          handleCurrentOption={handleCurrentOption}
          quantity={quantity}
          handlePlusQuantity={handlePlusQuantity}
          handleMinusQuantity={handleMinusQuantity}
          handleTypeQuantity={handleTypeQuantity}
          handleCreate={handleCreate}
        />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  width: 1140px;
  height: 100%;
  margin: 0 auto;
`;

export default App;
