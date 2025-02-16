import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import { useQuery } from "@tanstack/react-query";
import { PostsPage } from "./PostsPage";
import { Loading } from "../../shared/components/Loading";

vi.mock("@tanstack/react-query", () => ({
  useQuery: vi.fn(),
}));

describe("PostsPage", () => {
  it("renders error state", () => {
    (useQuery as vi.Mock).mockReturnValue({ error: new Error("Failed to fetch") });

    render(
      <BrowserRouter>
        <PostsPage />
      </BrowserRouter>
    );

    expect(screen.getByText(/error loading posts/i)).toBeInTheDocument();
  });

  it("renders posts when data is available", () => {
    (useQuery as vi.Mock).mockReturnValue({
      data: [
        { id: 1, title: "Post 1", body: "This is the first post body." },
        { id: 2, title: "Post 2", body: "This is the second post body." },
      ],
    });

    render(
      <BrowserRouter>
        <PostsPage />
      </BrowserRouter>
    );

    expect(screen.getByText(/post 1/i)).toBeInTheDocument();
    expect(screen.getByText(/post 2/i)).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /see more/i })).toHaveLength(2);
  });
});
