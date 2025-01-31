import React, { useState } from "react";
import SuperheroForm from "./components/SuperheroForm";
import SuperheroList from "./components/SuperheroList";
import "./App.css";
import { Superhero } from "./types";

const App: React.FC = () => {
    const [newHero, setNewHero] = useState<Superhero | null>(null);

    const handleAddHero = (hero: Superhero) => {
        setNewHero(hero);
    };

    return (
        <div className="App">
            <header>
                <h1>⚡ Superhero Nexus ⚡</h1>
            </header>
            <main>
                <SuperheroForm onAddHero={handleAddHero} />
                <SuperheroList newHeroAdded={newHero} />
            </main>
            <footer>
                <p>© 2025 Superhero Nexus</p>
            </footer>
        </div>
    );
};

export default App;
