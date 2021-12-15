import React from "react";
import styled from "styled-components";

import NextThumbButtonSrc from "../../assets/btn-next.svg";
import PrevThumbButtonSrc from "../../assets/btn-prev.svg";

function ThumbnailBox({
  thumbNails,
  position,
  handlePrevImg,
  handleNextImg,
  handleClickThumbnail,
}) {
  return (
    <Wrapper>
      <PrevThumbButton
        src={PrevThumbButtonSrc}
        alt="prev-thumb-button"
        onClick={handlePrevImg}
      />
      {thumbNails.map((imgSrc, index) => (
        <ThumbNail
          key={imgSrc}
          src={imgSrc}
          alt="thumbnail"
          active={position === index}
          onClick={() => handleClickThumbnail(index)}
        />
      ))}
      <NextThumbButton
        src={NextThumbButtonSrc}
        alt="next-thumb-button"
        onClick={handleNextImg}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  width: 752px;
  height: 73px;
`;

const ThumbNail = styled.img`
  width: 73px;
  height: 73px;
  border: 1px solid ${({ theme, active }) => (active ? theme.black : "none")};
  cursor: pointer;
`;

const PrevThumbButton = styled.img`
  width: 9px;
  height: 16px;
  cursor: pointer;
`;

const NextThumbButton = styled.img`
  width: 9px;
  height: 16px;
  cursor: pointer;
`;

export default ThumbnailBox;
