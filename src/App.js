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
  const isBase = currentOption["타입"] === "기본";

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
    if (currentOption["수량"] <= 0 || currentOption["수량"] > 999) {
      alert("수량을 확인 해주세요");
      return;
    }

    console.log(currentOption);
  }

  useEffect(() => {
    const initialOption = optionsMock?.reduce((result, option) => {
      const title = option["title"];
      const label = option.child[0]["label"];

      const currentData = { [title]: label };

      return Object.assign(result, currentData);
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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <SwiperBox isBase={isBase} />
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
