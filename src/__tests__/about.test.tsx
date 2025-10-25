import { render, screen } from "@testing-library/react";
import About from "../pages/About";

describe("About us component is being tested", () => {
  test("renders the About component", () => {
    render(<About />);
    expect(screen.getByText(/About Us/)).toBeInTheDocument();
    expect(screen.getByAltText("no image found")).toBeInTheDocument();

    render(<About />);
    expect(screen.getAllByText(/About Us/).length).toBe(2);
  });
  describe("About us component is being tested 2", () => {
    test("renders the About component", () => {
      render(<About />);
      expect(screen.getByAltText("no image found")).toBeInTheDocument();
      expect(screen.queryByRole("xyz")).not.toBeInTheDocument();
      expect(screen.getAllByAltText("no image found").length).toBe(1);
    });
  });
});
