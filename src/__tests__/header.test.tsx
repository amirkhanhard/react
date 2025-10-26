import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import { store } from "../store/appStore";
import UserContext from "../context/UserContext";
import { BrowserRouter } from "react-router-dom";

describe("Header component is being tested", () => {
  test("renders the Header component", () => {
    const mockSetUser = jest.fn();
    render(
      <BrowserRouter>
        <Provider store={store}>
          <UserContext.Provider
            value={{ user: { name: "amir" }, setUser: mockSetUser }}
          >
            <Header />
          </UserContext.Provider>
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getAllByText(/About Us/).length).toBe(2);
    expect(screen.queryAllByAltText("no image found").length).not.toBe(1);
    expect(screen.getByTestId("my-test-id")).toBeInTheDocument();
  });

  test("Testing click event on header", () => {
    const mockSetUser = jest.fn();
    render(
      <BrowserRouter>
        <Provider store={store}>
          <UserContext.Provider
            value={{ user: { name: "amir" }, setUser: mockSetUser }}
          >
            <Header />
          </UserContext.Provider>
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText("Login")).toBeInTheDocument();
    const stat = screen.getByTestId("test-stat");
    fireEvent.click(stat);
    expect(screen.getByText("Logout")).toBeInTheDocument();
  })
});
