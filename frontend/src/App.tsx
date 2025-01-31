import React, { useState, useEffect } from "react";
import SuperheroForm from "./components/SuperheroForm";
import SuperheroList from "./components/SuperheroList";
import "./App.css";
import { Superhero } from "./types";

const App: React.FC = () => {
    const [newHero, setNewHero] = useState<Superhero | null>(null);
    const [notification, setNotification] = useState<string | null>(null);

    useEffect(() => {
        if (newHero) {
            setNotification(
                `Hooray! ${newHero.name} has joined the Superhero Nexus!`
            );
            setTimeout(() => setNotification(null), 3000);
        }
    }, [newHero]);

    const handleAddHero = (hero: Superhero) => {
        setNewHero(hero);
    };

    return (
        <div className="App">
            <header>
                <h1>Superhero Nexus</h1>
            </header>
            {notification && <div className="notification">{notification}</div>}
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
