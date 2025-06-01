import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as redux from "react-redux";
// import { useDispatch } from "react-redux";

jest.mock("../UserListing/UserListing", () => () => (
  <div data-testid="user-listing">User Listing</div>
));

jest.mock("lottie-react", () => () => (
  <div data-testid="lottie-animation">Lottie Animation</div>
));

const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => mockDispatch,
    useSelector: jest.requireActual('react-redux').useSelector,
}))

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Home Component", () => {
  console.log("Test file loaded");
  beforeEach(() => {
    mockDispatch.mockClear();
  })

  it("renders Lottie animation when no users are available", () => {
    const store = mockStore({
      users: {
        users: {},
      },
    });

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(screen.getByTestId("lottie-animation")).toBeInTheDocument();
    expect(screen.getByText(/Another Great Day/i)).toBeInTheDocument();
    expect(screen.queryByTestId("user-listing")).not.toBeInTheDocument();
  });

  it("renders UserListing component when users exist", () => {
    const store = mockStore({
      users: {
        users: {
          items: [
            {
              login: "chroma",
              id: 1,
            },
          ],
        },
      },
    });

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(screen.getByTestId("user-listing")).toBeInTheDocument();
    expect(screen.queryByTestId("lottie-animation")).not.toBeInTheDocument();
  });

  it("dispatches fetchAsyncUsers on mount", () => {
    const store = mockStore({
      users: {
        users: {},
      },
    });

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(mockDispatch).toHaveBeenCalled();
  });
});
