import React, { useState, ChangeEvent, FormEvent } from "react";
import { Superhero, SuperheroFormProps } from "../types";

const SuperheroForm: React.FC<SuperheroFormProps> = ({ onAddHero }) => {
    const [name, setName] = useState<string>("");
    const [superpower, setSuperpower] = useState<string>("");
    const [humilityScore, setHumilityScore] = useState<number>(1);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name.trim() || !superpower.trim()) {
            alert("Please fill in all fields.");
            return;
        }

        if (humilityScore < 1 || humilityScore > 10) {
            alert("Humility Score must be between 1 and 10.");
            return;
        }

        const newHero: Superhero = { name, superpower, humilityScore };

        try {
            const response = await fetch("http://localhost:3000/superheroes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newHero),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Failed to add hero.");
            }

            const createdHero = await response.json();
            onAddHero(createdHero);

            setName("");
            setSuperpower("");
            setHumilityScore(1);
        } catch (error: unknown) {
            console.error("Error adding hero:", error);
            if (error instanceof Error) {
                alert(`Error: ${error.message}`);
            } else {
                alert("An unknown error occurred.");
            }
        }
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>
        setName(e.target.value);
    const handleSuperpowerChange = (e: ChangeEvent<HTMLInputElement>) =>
        setSuperpower(e.target.value);
    const handleHumilityScoreChange = (e: ChangeEvent<HTMLInputElement>) =>
        setHumilityScore(Number(e.target.value));

    return (
        <form onSubmit={handleSubmit} className="superhero-form" noValidate>
            <h2>Add a New Superhero</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
                required
            />
            <input
                type="text"
                placeholder="Superpower"
                value={superpower}
                onChange={handleSuperpowerChange}
                required
            />
            <input
                type="number"
                placeholder="Humility Score (1-10)"
                value={humilityScore}
                onChange={handleHumilityScoreChange}
                min={1}
                max={10}
                required
            />
            <button type="submit">Add Hero</button>
        </form>
    );
};

export default SuperheroForm;
