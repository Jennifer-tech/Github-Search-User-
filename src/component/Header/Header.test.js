import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import { fetchAsyncUsers } from "../../features/users/userSlice";

const mockStore = configureStore([]);
const store = mockStore({});

jest.mock("../../features/users/userSlice", () => ({
    fetchAsyncUsers: (term) => ({ type: "users/fetchAsyncUsers", payload: term}),
}))

describe("Header Component", () => {
    it("renders header elements", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Header />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByPlaceholderText("Search Users")).toBeInTheDocument();
        expect(screen.getByRole("button")).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /Github User/i })).toBeInTheDocument();
        expect(screen.getByAltText("github_image")).toBeInTheDocument()
    });

    it("updates input and dispatches action on submit", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Header />
                </MemoryRouter>
            </Provider>
        );

        const input = screen.getByPlaceholderText("Search Users");
        fireEvent.change(input, {target: {value: "jennifer-tech"}})
        expect(input.value).toBe("jennifer-tech");

        const form = input.closest("form");
        fireEvent.submit(form);

        const actions = store.getActions();
        expect(actions).toEqual([
            { type: "users/fetchAsyncUsers", payload: "jennifer-tech"}
        ])
    })
})