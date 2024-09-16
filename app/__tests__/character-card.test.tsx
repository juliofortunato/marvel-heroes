import { Character } from "@/app/_types/character";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import CharacterCard from "../_components/character-card";

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />;
  },
}));

// Mock next/link
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

describe("CharacterCard", () => {
  const mockCharacter = {
    id: 1,
    name: "Iron Man",
    thumbnail: {
      path: "http://example.com/image",
      extension: "jpg",
    },
  } as Character;

  it("renders the character name", () => {
    render(<CharacterCard character={mockCharacter as Character} />);
    expect(screen.getByText("Iron Man")).toBeInTheDocument();
  });

  it("renders the character image with correct props", () => {
    render(<CharacterCard character={mockCharacter} />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "http://example.com/image.jpg");
    expect(image).toHaveAttribute("alt", "Iron Man");
    expect(image).toHaveClass("h-full w-full object-cover");
  });

  it("links to the correct character detail page", () => {
    render(<CharacterCard character={mockCharacter} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/characters/1");
  });

  it("renders the gradient overlay", () => {
    render(<CharacterCard character={mockCharacter} />);
    const overlay = screen.getByTestId("gradient-overlay");
    expect(overlay).toHaveClass(
      "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent",
    );
  });
});
