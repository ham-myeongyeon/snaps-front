import React, { useState, useEffect } from "react";
import styled from "styled-components";

import showCaseMock from "../../Mockup/showcase.json";
import MainImgBox from "./MainImgBox";
import ThumbnailBox from "./ThumbnailBox";

function SwiperBox({ isBase }) {
  const [position, setPosition] = useState(0);
  const [mainImgs, setMainImgs] = useState([]);
  const [thumbNails, setThumbNails] = useState([]);
  const [startPos, setStartPos] = useState(0);

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

  function handleDragStart(e) {
    setStartPos(e.pageX);
  }

  function handleDragEnd(e) {
    const sum = e.pageX - startPos;
    let destination = Math.round(sum / 752) * 0.4;

    if (destination === 0.4) {
      handleNextImg();
    } else if (destination === -0.4) {
      handlePrevImg();
    }
  }

  return (
    <Wrapper onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
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
