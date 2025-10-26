import { render, screen } from "@testing-library/react";
import ErrorComponent from "../components/ErrorComponent";

global.myFun1 = jest.fn(()=> {
    console.log("myFun1 clicked");
});

describe("Testing error component started", () => {
  test("Testing error component without props", () => {
    render(<ErrorComponent />);
    expect(
      screen.getByText("Something went wrong. Please try again.")
    ).toBeInTheDocument();
  });

  test("Testing error component with props", () => {
    render(<ErrorComponent message="Error occurred" />);
    expect(screen.getByText("Error occurred")).toBeInTheDocument();
    expect(screen.queryByText("Try Again")).not.toBeInTheDocument();
  });

  test("Testing error component with fun as props", () => {
    render(<ErrorComponent message="Error occurred"  onRetry={myFun1} />);
    expect(screen.getByText("Try Again")).toBeInTheDocument();
  });
});
