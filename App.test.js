import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("App Routing", () => {
  it('renders Home component on default route "/"', () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/Another Great Day to explore different Github User/i)
    ).toBeInTheDocument();
  });

  it('renders UserDetail component on "/userDetail/:login"', () => {
    render(
        <MemoryRouter initialEntries={['/userDetail/sampleUser']}>
            <App />
        </MemoryRouter>
    );

    expect(screen.getByText(/View Github Profile/i)).toBeInTheDocument();
  })

  it('renders PageNotFound on non-existent route', () => {
    render(
        <MemoryRouter initialEntries={['/random-nonsense']}>
            <App />
        </MemoryRouter>
    );
    expect(screen.getByText(/PageNotFound/i)).toBeInTheDocument();
  });

  it('always renders Header and Footer', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Github User/i)).toBeInTheDocument(); 
  });
})
