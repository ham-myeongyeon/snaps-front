import React from "react";
import styled from "styled-components";

import NextMainButtonSrc from "../assets/btn-next-4040.svg";
import PrevMainButtonSrc from "../assets/btn-prev-4040.svg";

function MainImgBox({ mainImgs, position, handlePrevImg, handleNextImg }) {
  return (
    <>
      <Wrapper>
        <PrevMainImgButton
          src={PrevMainButtonSrc}
          alt="prev-main-img-button"
          onClick={handlePrevImg}
        />
        <ImgGroup position={position}>
          {mainImgs.map((imgSrc) => (
            <img key={imgSrc} src={imgSrc} alt="main-img" />
          ))}
        </ImgGroup>
        <NextMainImgButton
          src={NextMainButtonSrc}
          alt="next-main-img-button"
          onClick={handleNextImg}
        />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 752px;
  height: 752px;
  overflow: hidden;
`;

const PrevMainImgButton = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 336px;
  left: 10px;
  z-index: 1;
  cursor: pointer;
`;

const NextMainImgButton = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 336px;
  right: 10px;
  z-index: 1;
  cursor: pointer;
`;

const ImgGroup = styled.div`
  display: flex;
  transform: ${({ position }) => `translateX(${-position * 752}px )`};
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
`;

export default MainImgBox;
