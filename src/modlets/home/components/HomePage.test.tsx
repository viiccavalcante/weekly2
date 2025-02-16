import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { HomePage } from "./HomePage";

describe("HomePage", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(screen.getByText(/Welcome to my super simple Blog/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /explore our posts/i })).toBeInTheDocument();
  });
});
