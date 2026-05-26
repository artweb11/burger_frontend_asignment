import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ImageLoader from "./ImageLoader";

describe("ImageLoader", () => {
  it("renders the image", () => {
    render(<ImageLoader src="/favicon.svg" alt="test-image" />);

    const image = screen.getByAltText("test-image");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/favicon.svg");
  });

  it("shows spinner while loading", () => {
    const { container } = render(
      <ImageLoader src="/favicon.svg" alt="test-image" />,
    );

    // spinner exists initially
    const spinner = container.querySelector(".animate-spin");

    expect(spinner).toBeInTheDocument();
  });

  it("hides spinner after image loads", async () => {
    const { container } = render(
      <ImageLoader src="/favicon.svg" alt="test-image" />,
    );

    const image = screen.getByAltText("test-image");

    // simulate successful load
    fireEvent.load(image);

    const spinner = container.querySelector(".animate-spin");

    await waitFor(
      () => {
        expect(spinner).not.toBeInTheDocument();
      },
      { timeout: 1000 },
    );
  });

  it("shows image after load", async () => {
    render(<ImageLoader src="/favicon.svg" alt="test-image" />);

    const image = screen.getByAltText("test-image");

    fireEvent.load(image);

    await waitFor(
      () => {
        expect(image).toHaveClass("opacity-100");
        expect(image).not.toHaveClass("opacity-0");
      },
      { timeout: 1000 },
    );
  });

  it("shows error message when image fails to load", () => {
    render(<ImageLoader src="/bad.jpg" alt="broken-image" />);

    const image = screen.getByAltText("broken-image");

    // simulate failed load
    fireEvent.error(image);

    expect(screen.getByText("Failed to load")).toBeInTheDocument();
  });

  it("hides spinner when image fails to load", async () => {
    const { container } = render(
      <ImageLoader src="/bad.jpg" alt="broken-image" />,
    );

    const image = screen.getByAltText("broken-image");

    fireEvent.error(image);

    const spinner = container.querySelector(".animate-spin");

    await waitFor(
      () => {
        expect(spinner).not.toBeInTheDocument();
      },
      { timeout: 1000 },
    );
  });

  it("applies custom className", () => {
    const { container } = render(
      <ImageLoader
        src="/favicon.svg"
        alt="test-image"
        className="rounded-xl"
      />,
    );

    expect(container.firstChild).toHaveClass("rounded-xl");
  });
});
