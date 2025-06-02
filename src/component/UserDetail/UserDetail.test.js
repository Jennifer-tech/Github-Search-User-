import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import UserDetail from "./UserDetail";
import { MemoryRouter } from "react-router-dom";
// import * as reactRouter from "react-router-dom";
import githubApi from "../../common/apis/githubApi";
import '@testing-library/jest-dom';

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: () => ({ login: "jennifer-tech" }),
}))

jest.mock("../../common/apis/githubApi", () => ({
    get: jest.fn(),
}))

jest.mock("./Repo", () => ({ repo }) => (
    <div data-testid="repo">{repo.name}</div>
));

describe("UserDetail Component", () => {
    const mockUserResponse = {
        data: {
            login: "jennifer-tech",
            name: "Muofunanya Chioma",
            bio: "Full-stack Developer",
            avatar_url: "https://avatars.githubusercontent.com/u/1234567?v=4",
            followers: 20,
            following: 10,
            location: "Lagos, Nigeria",
            blog: "https://jennifer-tech.com",
            html_url: "https://github.com/chioma-dev"
        },
    };

    const mockReposResponse = {
        data: [
            { id: 1, name: "Repo One" },
            { id: 2, name: "Repo Two" }
        ],
    };

    beforeEach(() => {
        githubApi.get.mockImplementation((url) => {
            if(url.includes("/repos")) return Promise.resolve(mockReposResponse);
            return Promise.resolve(mockUserResponse);
        });
    });

    it("renders user details and repos correctly", async () => {
        render(
            <MemoryRouter>
                <UserDetail />
            </MemoryRouter>
        );

        await waitFor(() => {
            expect(screen.getByText("Muofunanya Chioma")).toBeInTheDocument();
        });

        expect(screen.getByText("Full-stack Developer")).toBeInTheDocument();
        expect(screen.getByText(/20 Followers. Following 10/i)).toBeInTheDocument();
        expect(screen.getByText("Lagos, Nigeria")).toBeInTheDocument();
        expect(screen.getByText("https://jennifer-tech.com")).toBeInTheDocument();
        expect(screen.getByRole("img")).toHaveAttribute("src", mockUserResponse.data.avatar_url);
        expect(screen.getByRole("link")).toHaveAttribute("href", mockUserResponse.data.html_url);

        expect(await screen.findByText("Repo One")).toBeInTheDocument();
        expect(await screen.findByText("Repo Two")).toBeInTheDocument();
    })
})