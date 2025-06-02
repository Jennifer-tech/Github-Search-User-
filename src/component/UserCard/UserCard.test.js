import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import UserCard from "./UserCard";

const mockUser = {
    login: "jennifer-tech",
    avatar_url: "https://avatars.githubusercontent.com/u/1234567?v=4",
};

const renderWithRouter = (ui) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>)
};

describe("UserCard Component", () => {
    it("renders user login", () => {
        renderWithRouter(<UserCard data={mockUser} />);
        expect(screen.getByText(`${mockUser.login}`)).toBeInTheDocument();
    })

    it("renders user avatar", () => {
        renderWithRouter(<UserCard data={mockUser} />);
        const image = screen.getByRole("img");
        expect(image).toHaveAttribute("src", mockUser.avatar_url);
        expect(image).toHaveAttribute("alt", mockUser.login + "'s avatar")
    })

    it("navigates to user detail page on click", () => {
        renderWithRouter(<UserCard data={mockUser} />);
        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("href", `/userDetail/${mockUser.login}`)
    })
})