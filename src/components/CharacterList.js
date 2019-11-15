import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

const api = "https://rickandmortyapi.com/api/character/";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(api)
      .then(res => {
        console.log(res.data);
        setCharacters(res.data.results);
      })
      .catch(err => console.error(err));
  }, []);
  return (
    <section className="character-list">
      {characters.map(char => {
        return (
          <CharacterCard
            image={char.image}
            name={char.name}
            species={char.species}
            status={char.status}
            gender={char.gender}
            location={char.location}
            key={char.id}
          />
        );
      })}
    </section>
  );
}
