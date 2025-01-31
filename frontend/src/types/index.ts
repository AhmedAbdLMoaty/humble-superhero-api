export interface Superhero {
    name: string;
    superpower: string;
    humilityScore: number;
}

export interface SuperheroFormProps {
    onAddHero: (hero: Superhero) => void;
}

export interface SuperheroListProps {
    newHeroAdded: Superhero | null;
}
