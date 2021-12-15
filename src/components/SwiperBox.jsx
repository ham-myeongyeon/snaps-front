import React, { useState, useEffect } from "react";
import styled from "styled-components";

import showCaseMock from "../Mockup/showcase.json";
import NextMainButtonSrc from "../assets/btn-next-4040.svg";
import PrevMainButtonSrc from "../assets/btn-prev-4040.svg";
import NextThumbButtonSrc from "../assets/btn-next.svg";
import PrevThumbButtonSrc from "../assets/btn-prev.svg";

function SwiperBox() {
  const [position, setPosition] = useState(0);
  const [mainImgs, setMainImgs] = useState([]);
  const [thumbNails, setThumbNails] = useState([]);

  function handleNextImg() {
    if (position === mainImgs.length - 1) {
      return;
    }

    setPosition(position + 1);
  }

  function handlePrevImg() {
    if (position === 0) {
      return;
    }

    setPosition(position - 1);
  }

  function handleClickThumbnail(index) {
    setPosition(index);
  }

  useEffect(() => {
    const mainImgsData = [];
    const thumbNailsData = [];

    for (const data of showCaseMock) {
      mainImgsData.push(`https://files.snaps.com${data["imagePath"]}`);
      thumbNailsData.push(
        `https://files.snaps.com${data["thumbnailImagePath"]}`
      );
    }

    setMainImgs(mainImgsData);
    setThumbNails(thumbNailsData);
  }, [showCaseMock]);

  return (
    <Wrapper>
      <MainImgBox>
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
      </MainImgBox>
      <ThumbnailBox>
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
      </ThumbnailBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 80px;
  width: 820px;
`;

const MainImgBox = styled.div`
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

const ThumbnailBox = styled.div`
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

export default SwiperBox;
