import React, { useState, useEffect } from "react";
import styled from "styled-components";

function SelectBox({ optionDatas, handleCurrentOption }) {
  if (!optionDatas.length) {
    return null;
  }

  return (
    <>
      {optionDatas?.map((option) => {
        const buttons = option.child;
        return (
          <Wrapper key={option.title}>
            <span>{option.title}</span>
            <ButtonBox key={option.title}>
              {buttons.map((button) => {
                return (
                  <button
                    onClick={() =>
                      handleCurrentOption(option.title, button.label)
                    }
                    key={`${option.title}_${button.label}`}
                  >
                    {button.label}
                  </button>
                );
              })}
            </ButtonBox>
          </Wrapper>
        );
      })}
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 24px;
  height: 63px;
  color: ${({ theme }) => theme.color.black};

  span {
    width: 24px;
    height: 15px;
    font-size: 12px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 4px;
  height: 40px;

  button {
    width: 100%;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.color.whiteThree};
    font-size: 12px;
    color: ${({ theme }) => theme.color.black};
  }
`;

export default SelectBox;
