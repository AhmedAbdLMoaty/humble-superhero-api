import { render, screen, waitFor } from "@testing-library/react";
import SuperheroList from "./SuperheroList";
import { Superhero } from "../types";
import { vi } from "vitest";

describe("SuperheroList", () => {
    const mockHeroes: Superhero[] = [
        { name: "Superman", superpower: "Flight", humilityScore: 8 },
        { name: "Wonder Woman", superpower: "Strength", humilityScore: 9 },
    ];

    beforeEach(() => {
        vi.spyOn(global, "fetch").mockResolvedValue({
            ok: true,
            json: async () => mockHeroes,
        } as Response);
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("renders list of superheroes", async () => {
        render(<SuperheroList newHeroAdded={null} />);
        expect(screen.getByText(/superheroes/i)).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText(/superman/i)).toBeInTheDocument();
            expect(screen.getByText(/wonder woman/i)).toBeInTheDocument();
        });
    });

    it("handles fetch error gracefully", async () => {
        vi.spyOn(global, "fetch").mockResolvedValueOnce({
            ok: false,
            json: async () => ({ message: "Failed to fetch heroes." }),
        } as Response);

        vi.spyOn(window, "alert").mockImplementation(() => {});

        render(<SuperheroList newHeroAdded={null} />);

        await waitFor(() => {
            expect(window.alert).toHaveBeenCalledWith("Error fetching heroes.");
        });
    });
});
