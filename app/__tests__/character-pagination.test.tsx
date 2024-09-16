import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import CharacterPagination from "../_components/character-pagination";

jest.mock("../_hooks/usePagination", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("CharacterPagination", () => {
  const mockUsePagination = jest.requireMock("../_hooks/usePagination").default;
  const mockNavigateTo = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockUsePagination.mockReturnValue({
      currentPage: 1,
      navigateTo: mockNavigateTo,
    });
  });

  it("renders pagination with correct number of pages", () => {
    render(<CharacterPagination totalPages={5} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(7); // 5 pages + prev + next;
  });

  it("disables previous button on first page", () => {
    render(<CharacterPagination totalPages={5} />);
    const prevButton = screen.getByLabelText("Ir para a página anterior");
    expect(prevButton).toHaveAttribute("aria-disabled", "true");
  });

  it("disables next button on last page", () => {
    mockUsePagination.mockReturnValue({
      currentPage: 5,
      navigateTo: mockNavigateTo,
    });
    render(<CharacterPagination totalPages={5} />);
    const nextButton = screen.getByLabelText("Ir para a próxima página");
    expect(nextButton).toHaveAttribute("aria-disabled", "true");
  });

  it("calls navigateTo with correct page number when a page is clicked", () => {
    render(<CharacterPagination totalPages={5} />);
    fireEvent.click(screen.getByText("3"));
    expect(mockNavigateTo).toHaveBeenCalledWith(3);
  });

  it("shows ellipsis when there are more than MAX_PAGES_TO_SHOW pages", () => {
    mockUsePagination.mockReturnValue({
      currentPage: 5,
      navigateTo: mockNavigateTo,
    });
    render(<CharacterPagination totalPages={10} />);
    expect(screen.getAllByText("Mais páginas")).toHaveLength(2);
  });

  it("correctly generates page numbers for middle pages", () => {
    mockUsePagination.mockReturnValue({
      currentPage: 5,
      navigateTo: mockNavigateTo,
    });
    render(<CharacterPagination totalPages={10} />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  it("calls navigateTo with correct page number when next is clicked", () => {
    mockUsePagination.mockReturnValue({
      currentPage: 3,
      navigateTo: mockNavigateTo,
    });
    render(<CharacterPagination totalPages={5} />);
    fireEvent.click(screen.getByLabelText("Ir para a próxima página"));
    expect(mockNavigateTo).toHaveBeenCalledWith(4);
  });

  it("calls navigateTo with correct page number when previous is clicked", () => {
    mockUsePagination.mockReturnValue({
      currentPage: 3,
      navigateTo: mockNavigateTo,
    });
    render(<CharacterPagination totalPages={5} />);
    fireEvent.click(screen.getByLabelText("Ir para a página anterior"));
    expect(mockNavigateTo).toHaveBeenCalledWith(2);
  });
});
