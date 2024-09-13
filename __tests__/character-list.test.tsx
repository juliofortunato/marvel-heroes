import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CharacterList from "../app/_components/character-list";

// Mock the custom hooks and services
jest.mock("../app/_hooks/useFilters", () => ({
  __esModule: true,
  default: jest.fn(() => ({ search: "", orderBy: "name" })),
}));

jest.mock("../app/_hooks/usePagination", () => ({
  __esModule: true,
  default: jest.fn(() => ({ currentPage: 1 })),
}));

jest.mock("../app/_services/character", () => ({
  useCharacters: jest.fn(),
}));

// Mock child components
jest.mock("../app/_components/character-card", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="character-card" />),
}));

jest.mock("../app/_components/character-pagination", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="character-pagination" />),
}));

jest.mock("../app/_components/loading", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="loading" />),
}));

jest.mock("../app/_components/error", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="error" />),
}));

describe("CharacterList", () => {
  const mockUseCharacters = jest.requireMock(
    "../app/_services/character",
  ).useCharacters;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading state", () => {
    mockUseCharacters.mockReturnValue({
      isLoading: true,
      error: null,
      data: null,
    });
    render(<CharacterList />);
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("renders error state", () => {
    mockUseCharacters.mockReturnValue({
      isLoading: false,
      error: new Error("Test error"),
      data: null,
    });
    render(<CharacterList />);
    expect(screen.getByTestId("error")).toBeInTheDocument();
  });

  it("renders character cards and pagination when data is loaded", () => {
    const mockData = {
      results: [
        { id: 1, name: "Character 1" },
        { id: 2, name: "Character 2" },
      ],
      total: 50,
    };
    mockUseCharacters.mockReturnValue({
      isLoading: false,
      error: null,
      data: mockData,
    });

    render(<CharacterList />);

    expect(screen.getAllByTestId("character-card")).toHaveLength(2);
    expect(screen.getByTestId("character-pagination")).toBeInTheDocument();
  });

  it("calculates total pages correctly", () => {
    const mockData = {
      results: [{ id: 1, name: "Character 1" }],
      total: 50,
    };
    mockUseCharacters.mockReturnValue({
      isLoading: false,
      error: null,
      data: mockData,
    });

    render(<CharacterList />);

    const paginationComponent = jest.requireMock(
      "../app/_components/character-pagination",
    ).default;
    expect(paginationComponent).toHaveBeenCalledWith(
      expect.objectContaining({ totalPages: 3 }),
      expect.anything(),
    );
  });
});
