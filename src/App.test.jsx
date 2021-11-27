import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the expected IFrame", () => {
  render(<App />);
  expect(screen.getByRole("presentation")).toBeInTheDocument();
});
