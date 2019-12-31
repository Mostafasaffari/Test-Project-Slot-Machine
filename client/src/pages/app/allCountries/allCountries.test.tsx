import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import defaultTheme from "../../../style/themes/default";
import AllCountries from "./";

const renderComponent = (theme: DefaultTheme) =>
  render(
    <ThemeProvider theme={theme}>
      <AllCountries />
    </ThemeProvider>
  );

afterEach(cleanup);
describe("All Countries Component", () => {
  it("Should render without crash", () => {
    const { asFragment } = renderComponent(defaultTheme);
    expect(asFragment()).toMatchSnapshot();
  });
});
