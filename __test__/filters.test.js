import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import Filters from "../component/filters";

const router = {
  route: "/",
  pathname: "/",
  query: { launch_year: "2019" },
  asPath: "/?launch_year=2019",
  basePath: "",
  events: undefined,
  isFallback: false,
};

test("renders developed by", () => {
  const tree = renderer.create(<Filters router={router} />).toJSON();
  expect(tree).toMatchSnapshot();
});
