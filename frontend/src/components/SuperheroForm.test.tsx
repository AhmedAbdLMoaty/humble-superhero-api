import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SuperheroForm from "./SuperheroForm";
import { vi } from "vitest";

describe("SuperheroForm", () => {
    const mockOnAddHero = vi.fn();

    beforeEach(() => {
        render(<SuperheroForm onAddHero={mockOnAddHero} />);
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("renders form inputs and submit button", () => {
        expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/superpower/i)).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText(/humility score/i)
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /add hero/i })
        ).toBeInTheDocument();
    });

    it("validates form inputs before submission", async () => {
        const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});

        fireEvent.click(screen.getByRole("button", { name: /add hero/i }));

        await waitFor(() => {
            expect(alertSpy).toHaveBeenCalledWith("Please fill in all fields.");
        });

        fireEvent.change(screen.getByPlaceholderText(/name/i), {
            target: { value: "Batman" },
        });
        fireEvent.change(screen.getByPlaceholderText(/superpower/i), {
            target: { value: "Martial Arts" },
        });
        fireEvent.change(screen.getByPlaceholderText(/humility score/i), {
            target: { value: "11" },
        });
        fireEvent.click(screen.getByRole("button", { name: /add hero/i }));

        await waitFor(() => {
            expect(alertSpy).toHaveBeenCalledWith(
                "Humility Score must be between 1 and 10."
            );
        });

        alertSpy.mockRestore();
    });

    it("calls onAddHero with correct data on valid form submission", async () => {
        vi.spyOn(global, "fetch").mockResolvedValueOnce({
            ok: true,
            json: async () => ({
                name: "Batman",
                superpower: "Martial Arts",
                humilityScore: 7,
            }),
        } as Response);

        fireEvent.change(screen.getByPlaceholderText(/name/i), {
            target: { value: "Batman" },
        });
        fireEvent.change(screen.getByPlaceholderText(/superpower/i), {
            target: { value: "Martial Arts" },
        });
        fireEvent.change(screen.getByPlaceholderText(/humility score/i), {
            target: { value: "7" },
        });
        fireEvent.click(screen.getByRole("button", { name: /add hero/i }));

        await waitFor(() => {
            expect(mockOnAddHero).toHaveBeenCalledWith({
                name: "Batman",
                superpower: "Martial Arts",
                humilityScore: 7,
            });
        });
    });
});
