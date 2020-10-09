import React from "react";
import { render } from "@testing-library/react";
import Footer from "../component/footer";

test("renders developed by", () => {
  const { getByText } = render(<Footer />);
  const linkElement = getByText(/Mohamed Jubair/);
  expect(linkElement).toBeInTheDocument();
});
