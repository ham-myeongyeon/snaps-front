import React, { useState, useEffect } from "react";
import styled from "styled-components";

import showCaseMock from "../Mockup/showcase.json";
import MainImgBox from "../components/MainImgBox";
import ThumbnailBox from "../components/ThumbnailBox";

function SwiperBox({ isBase }) {
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

  useEffect(() => {
    if (isBase) {
      setPosition(0);
    }
  }, [isBase]);

  return (
    <Wrapper>
      <MainImgBox
        mainImgs={mainImgs}
        position={position}
        handlePrevImg={handlePrevImg}
        handleNextImg={handleNextImg}
      />
      <ThumbnailBox
        thumbNails={thumbNails}
        position={position}
        handlePrevImg={handlePrevImg}
        handleNextImg={handleNextImg}
        handleClickThumbnail={handleClickThumbnail}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 80px;
  width: 820px;
`;

export default SwiperBox;
