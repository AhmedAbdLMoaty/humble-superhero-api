import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Superhero, SuperheroListProps } from "../types";
import { FaUserShield } from "react-icons/fa";

const SuperheroList: React.FC<SuperheroListProps> = ({ newHeroAdded }) => {
    const [heroes, setHeroes] = useState<Superhero[]>([]);

    const fetchHeroes = async () => {
        try {
            const response = await fetch("http://localhost:3000/superheroes");
            if (!response.ok) {
                throw new Error("Failed to fetch heroes.");
            }
            const data: Superhero[] = await response.json();
            setHeroes(data);
        } catch (error) {
            console.error("Error fetching heroes:", error);
            alert("Error fetching heroes.");
        }
    };

    useEffect(() => {
        fetchHeroes();
    }, [newHeroAdded]);

    return (
        <div className="superhero-list">
            <h2>Superheroes</h2>
            <AnimatePresence>
                <ul>
                    {heroes.map((hero, index) => (
                        <motion.li
                            key={`${hero.name}-${index}`}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="hero-item"
                        >
                            <span className="hero-info">
                                <FaUserShield
                                    size={24}
                                    color="#ffcc00"
                                    style={{ marginRight: "8px" }}
                                />
                                <strong>{hero.name}</strong> - {hero.superpower}
                            </span>
                            <motion.span
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1.2 }}
                                transition={{
                                    duration: 0.3,
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                }}
                                className="humility-score"
                            >
                                (Humility: {hero.humilityScore})
                            </motion.span>
                        </motion.li>
                    ))}
                </ul>
            </AnimatePresence>
        </div>
    );
};

export default SuperheroList;
