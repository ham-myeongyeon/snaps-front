import React from "react";
import styled from "styled-components";

function NotifyBox() {
  return (
    <Wrapper>
      <Item>
        <Name>
          <Bullet />
          <span className="name">사이즈</span>
        </Name>
        <span className="content">15cm x 30cm</span>
      </Item>
      <Item>
        <Name>
          <Bullet />
          <span className="name">배송안내</span>
        </Name>
        <span className="content">제작 1일 및 택배배송 1~2일 소요</span>
      </Item>
      <Item>
        <Name>
          <Bullet />
          <span className="name">배송료</span>
        </Name>
        <span className="content">2,500원 (5만원 이상 주문 시 무료)</span>
      </Item>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 8px;
  font-size: 12px;

  .content {
    width: 240px;
    height: 15px;
    text-align: left;
    color: ${({ theme }) => theme.color.brownishGrey};
  }
`;

const Item = styled.div`
  display: flex;
  padding: 0;
  justify-content: space-between;
  height: 15px;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  height: 15px;

  .name {
    margin: 0;
    height: 15px;
  }
`;

const Bullet = styled.div`
  width: 2px;
  height: 2px;
  margin: -5px 4px 0 0;
  background-color: #191919;
`;

export default NotifyBox;
