import React from "react";
import { Link } from "../link";
import { render } from "@testing-library/react";

xit("matches snapshot", () => {
  const { asFragment } = render(<Link to="/home">Home</Link>);
  expect(asFragment()).toMatchSnapshot();
});
