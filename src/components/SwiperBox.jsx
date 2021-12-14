import React, { useState, useEffect } from "react";
import styled from "styled-components";

import showCaseMock from "../Mockup/showcase.json";

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
        <PrevMainImgButton onClick={handlePrevImg}>{"<"}</PrevMainImgButton>
        <ImgGroup position={position}>
          {mainImgs.map((imgSrc) => (
            <img key={imgSrc} src={imgSrc} alt="main-img" />
          ))}
        </ImgGroup>
        <NextMainImgButton onClick={handleNextImg}>{">"}</NextMainImgButton>
      </MainImgBox>
      <ThumbnailBox>
        <PrevThumbnailButton onClick={handlePrevImg}>{"<"}</PrevThumbnailButton>
        {thumbNails.map((imgSrc, index) => (
          <ThumbNail
            key={imgSrc}
            src={imgSrc}
            alt="thumbnail"
            active={position === index}
          />
        ))}
        <NextThumbnailButton onClick={handleNextImg}>{">"}</NextThumbnailButton>
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

  button {
    position: absolute;
    width: 40px;
    height: 40px;
    z-index: 1;
  }
`;

const PrevMainImgButton = styled.button`
  top: 336px;
  left: 10px;
`;
const NextMainImgButton = styled.button`
  top: 336px;
  right: 10px;
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

  button {
    width: 9px;
    height: 16px;
  }
`;

const ThumbNail = styled.img`
  width: 73px;
  height: 73px;
  border: 1px solid ${({ theme, active }) => (active ? theme.black : "none")};
`;

const PrevThumbnailButton = styled.button``;

const NextThumbnailButton = styled.button``;

export default SwiperBox;
