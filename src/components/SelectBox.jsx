import React from "react";
import styled from "styled-components";

function SelectBox({ optionDatas, currentOption, handleCurrentOption }) {
  if (!optionDatas.length) {
    return null;
  }

  return (
    <>
      {optionDatas?.map((option) => {
        const title = option.title;
        const buttons = option.child;
        return (
          <Wrapper key={title}>
            <span>{title}</span>
            <ButtonBox key={title}>
              {buttons.map((button) => {
                return (
                  <Button
                    active={currentOption[title] === button.label}
                    onClick={() => handleCurrentOption(title, button.label)}
                    key={`${title}_${button.label}`}
                  >
                    {button.label}
                  </Button>
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
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid
    ${({ active, theme }) => {
      return active ? theme.color.black : theme.color.whiteThree;
    }};
  font-size: 12px;
  color: ${({ theme }) => theme.color.black};
  &:hover {
    border-color: ${({ theme }) => theme.color.black};
  }
`;

export default SelectBox;
