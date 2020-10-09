import React from "react";
import { render } from "@testing-library/react";
import Header from "../component/header";

test("renders developed by", () => {
  const { getByText } = render(<Header />);
  const headerText = getByText(/SpaceX Launch Programs/);
  expect(headerText).toBeInTheDocument();
});
