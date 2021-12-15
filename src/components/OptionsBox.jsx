import React from "react";
import styled from "styled-components";

import SelectBox from "./SelectBox";
import NotifyBox from "./NotifyBox";

import PlusImage from "../assets/btn-plus-2438.svg";
import MinusImage from "../assets/btn-minus-2438.svg";

function OptionsBox({
  optionDatas,
  currentOption,
  handleCurrentOption,
  quantity,
  handlePlusQuantity,
  handleMinusQuantity,
  handleTypeQuantity,
  handleCreate,
}) {
  return (
    <Container>
      <Wrapper>
        <Title>옵션 선택</Title>
        <SelectBox
          optionDatas={optionDatas}
          currentOption={currentOption}
          handleCurrentOption={handleCurrentOption}
        />
        <QuantBox>
          <span>수량</span>
          <SelectQuant>
            <MinusButton onClick={handleMinusQuantity} src={MinusImage} />
            <Quantity
              type="number"
              value={quantity}
              onChange={handleTypeQuantity}
            />
            <PlusButton onClick={handlePlusQuantity} src={PlusImage} />
          </SelectQuant>
        </QuantBox>
        <InfoBox>
          <span className="title">기본 / 거치대</span>
          <div className="price">
            <span>수량: {quantity}</span>
            <span>5,000원</span>
          </div>
        </InfoBox>
        <PriceInfoBox>
          <span className="title">총가격</span>
          <span className="price">5,000원</span>
        </PriceInfoBox>
        <CreateButton onClick={handleCreate}>만들기</CreateButton>
        <NotifyBox />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 320px;
`;

const Wrapper = styled.div`
  margin-top: 80px;
  height: 577px;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 24px;
  width: 92px;
  height: 29px;
  font-size: 22px;
  color: ${({ theme }) => theme.color.black};
`;

const QuantBox = styled.div`
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

const SelectQuant = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 158px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.color.whiteThree};
  font-size: 12px;
  color: ${({ theme }) => theme.color.black};

  span {
    display: block;
  }
`;

const MinusButton = styled.img`
  width: 24px;
  height: 38px;
  object-fit: contain;
  cursor: pointer;
`;

const Quantity = styled.input`
  width: 50%;
  text-align: center;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const PlusButton = styled.img`
  width: 24px;
  height: 38px;
  object-fit: contain;
  cursor: pointer;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  height: 70px;
  font-size: 12px;
  border-top: 1px solid ${({ theme }) => theme.color.whiteThree};
  border-bottom: 1px solid ${({ theme }) => theme.color.whiteThree};

  span.title {
    height: 15px;
  }

  div.price {
    display: flex;
    justify-content: space-between;
    height: 15px;
  }
`;

const PriceInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  align-items: center;

  span.title {
    height: 15px;
    font-size: 12px;
  }

  span.price {
    height: 19px;
    font-size: 14px;
    color: ${({ theme }) => theme.color.red};
  }
`;

const CreateButton = styled.div`
  margin-bottom: 24px;
  text-align: center;
  color: white;
  height: 50px;
  font-size: 13px;
  line-height: 50px;
  background-color: ${({ theme }) => theme.color.black};
`;

export default OptionsBox;
