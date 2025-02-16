import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PostPage } from "./PostPage";

const queryClient = new QueryClient();

describe("PostPage Smoke Test", () => {
  test("renders without crashing", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <PostPage />
        </BrowserRouter>
      </QueryClientProvider>
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
