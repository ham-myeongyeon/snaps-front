import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SelectBox from "../../../components/OptionsBox/SelectBox";

import MockTheme from "../MockTheme";

describe("SelectBox component", () => {
  const handleCurrentOption = jest.fn();

  beforeEach(() => {
    const optionDatas = [
      {
        title: "타입",
        keyName: "paperType",
        child: [
          {
            label: "기본",
            value: "160022",
          },
          {
            label: "투명",
            value: "160024",
          },
          {
            label: "캔버스",
            value: "160032",
          },
        ],
      },
      {
        title: "옵션",
        keyName: "frameType",
        child: [
          {
            label: "거치대",
            value: "386002",
          },
          {
            label: "거치대 없음",
            value: "386001",
          },
        ],
      },
    ];

    const currentOption = {
      타입: "기본",
      옵션: "거치대",
    };

    render(
      <MockTheme>
        <SelectBox
          optionDatas={optionDatas}
          currentOption={currentOption}
          handleCurrentOption={handleCurrentOption}
        />
      </MockTheme>
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should render by option data", () => {
    expect(screen.getByText("타입")).toBeInTheDocument();
    expect(screen.getByText("기본")).toBeInTheDocument();
    expect(screen.getByText("투명")).toBeInTheDocument();
    expect(screen.getByText("캔버스")).toBeInTheDocument();
    expect(screen.getByText("옵션")).toBeInTheDocument();
    expect(screen.getByText("거치대")).toBeInTheDocument();
    expect(screen.getByText("거치대 없음")).toBeInTheDocument();
  });

  it("should change current option when click option", async () => {
    const optionOne = screen.getByText("투명");
    const optionTwo = screen.getByText("거치대 없음");

    await waitFor(() => {
      userEvent.click(optionOne);
      userEvent.click(optionTwo);
    });

    expect(handleCurrentOption).toBeCalledTimes(2);
  });
});
