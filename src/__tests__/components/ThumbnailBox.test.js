import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ThumbnailBox from "../../components/ThumbnailBox";
import thumbnailMock from "../Mockup/thumbnailImg.json";

describe("ThumbnailBox component", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should render thumbnail imgs by data", () => {
    const thumbNails = thumbnailMock;

    const handlePrevImg = jest.fn();
    const handleNextImg = jest.fn();
    const handleClickThumbnail = jest.fn();

    render(
      <ThumbnailBox
        thumbNails={thumbNails}
        position={1}
        handlePrevImg={handlePrevImg}
        handleNextImg={handleNextImg}
        handleClickThumbnail={handleClickThumbnail}
      />
    );

    const thumbnails = screen.getAllByAltText("thumbnail");

    expect(thumbnails).toHaveLength(thumbNails.length);
  });

  it("should called button function when click button", async () => {
    const thumbNails = thumbnailMock;

    const handlePrevImg = jest.fn();
    const handleNextImg = jest.fn();
    const handleClickThumbnail = jest.fn();

    render(
      <ThumbnailBox
        thumbNails={thumbNails}
        position={1}
        handlePrevImg={handlePrevImg}
        handleNextImg={handleNextImg}
        handleClickThumbnail={handleClickThumbnail}
      />
    );
    const prevThumbButton = screen.getByAltText("prev-thumb-button");
    const nextThumbButton = screen.getByAltText("next-thumb-button");

    await userEvent.click(prevThumbButton);
    await userEvent.click(nextThumbButton);

    expect(handlePrevImg).toBeCalledTimes(1);
    expect(handleNextImg).toBeCalledTimes(1);
  });
});
