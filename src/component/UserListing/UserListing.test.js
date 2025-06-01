import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UserListing from "./UserListing";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

jest.mock("../UserCard/UserCard", () => ({ data }) => (
    <div data-testid="user-card">{data.login}</div>
))

const mockStore = configureStore([]);

describe("UserListing Component", () => {
    it("renders list of UserCards when users exist", () => {
        const store = mockStore({
            users: {
                users: {
                    items: [
                        { login: "chioma", id: 1},
                        { login: "Muofunanya", id: 2 },
                    ],
                },
            },
        });

        render(
            <Provider store={store}>
                <UserListing />
            </Provider>
        )

        expect(screen.getByText("Github Users")).toBeInTheDocument();
        expect(screen.getAllByTestId("user-card")).toHaveLength(2);
    })

    it("renders error message when no users exists", () => {
        const store = mockStore({
            users: {
                users: {
                    items: [],
                    Error: "No users found",
                },
            },
        });

        render(
            <Provider store={store}>
                <UserListing />
            </Provider>
        );

        expect(screen.getByText("No users found")).toBeInTheDocument();
        expect(screen.queryByTestId("user-card")).not.toBeInTheDocument()
    });

    it("does not render heading when there are no users", () => {
        const store = mockStore({
            users: {
                users: {
                    items: [],
                },
            },
        });

        render(
            <Provider store={store}>
                <UserListing />
            </Provider>
        );

        expect(screen.queryByText('Github Users')).not.toBeInTheDocument();
    })
})