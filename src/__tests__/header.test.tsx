import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import { store } from "../store/appStore";
import UserContext from "../context/UserContext";
import { BrowserRouter } from "react-router-dom";

describe("About us component is being tested", () => {
  test("renders the About component", () => {
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
});
