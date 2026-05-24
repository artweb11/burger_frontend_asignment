import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ImageLoader from "./ImageLoader";

describe("ImageLoader", () => {
  it("renders the image", () => {
    render(<ImageLoader src="/test.jpg" alt="test-image" />);

    const image = screen.getByAltText("test-image");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/test.jpg");
  });

  it("shows spinner while loading", () => {
    const { container } = render(
      <ImageLoader src="/test.jpg" alt="test-image" />,
    );

    // spinner exists initially
    const spinner = container.querySelector(".animate-spin");

    expect(spinner).toBeInTheDocument();
  });

  it("hides spinner after image loads", () => {
    const { container } = render(
      <ImageLoader src="/test.jpg" alt="test-image" />,
    );

    const image = screen.getByAltText("test-image");

    // simulate successful load
    fireEvent.load(image);

    const spinner = container.querySelector(".animate-spin");

    expect(spinner).not.toBeInTheDocument();
  });

  it("shows image after load", () => {
    render(<ImageLoader src="/test.jpg" alt="test-image" />);

    const image = screen.getByAltText("test-image");

    fireEvent.load(image);

    expect(image).toHaveClass("opacity-100");
    expect(image).not.toHaveClass("opacity-0");
  });

  it("shows error message when image fails to load", () => {
    render(<ImageLoader src="/bad.jpg" alt="broken-image" />);

    const image = screen.getByAltText("broken-image");

    // simulate failed load
    fireEvent.error(image);

    expect(screen.getByText("Failed to load")).toBeInTheDocument();
  });

  it("hides spinner when image fails to load", () => {
    const { container } = render(
      <ImageLoader src="/bad.jpg" alt="broken-image" />,
    );

    const image = screen.getByAltText("broken-image");

    fireEvent.error(image);

    const spinner = container.querySelector(".animate-spin");

    expect(spinner).not.toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <ImageLoader src="/test.jpg" alt="test-image" className="rounded-xl" />,
    );

    expect(container.firstChild).toHaveClass("rounded-xl");
  });
});
