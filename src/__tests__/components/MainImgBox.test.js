import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MainImgBox from "../../components/MainImgBox";
import mainImgMock from "../Mockup/mainImg.json";

describe("MainImgBox component", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should render main-imgs by data", () => {
    const mainImgs = mainImgMock;

    const handlePrevImg = jest.fn();
    const handleNextImg = jest.fn();

    render(
      <MainImgBox
        mainImgs={mainImgs}
        position={1}
        handlePrevImg={handlePrevImg}
        handleNextImg={handleNextImg}
      />
    );

    const imgs = screen.getAllByAltText("main-img");

    expect(imgs).toHaveLength(mainImgs.length);
  });

  it("should called button function when click button", async () => {
    const mainImgs = mainImgMock;

    const handlePrevImg = jest.fn();
    const handleNextImg = jest.fn();

    render(
      <MainImgBox
        mainImgs={mainImgs}
        position={1}
        handlePrevImg={handlePrevImg}
        handleNextImg={handleNextImg}
      />
    );

    const prevMainImgButton = screen.getByAltText("prev-main-img-button");
    const nextMianImgButton = screen.getByAltText("next-main-img-button");

    await userEvent.click(prevMainImgButton);
    await userEvent.click(nextMianImgButton);

    expect(handlePrevImg).toBeCalledTimes(1);
    expect(handleNextImg).toBeCalledTimes(1);
  });
});
