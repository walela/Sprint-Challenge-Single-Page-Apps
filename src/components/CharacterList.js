import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "./styles";
import { useLocalStorage } from "./CustomHooks";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [characters, setCharacters] = useLocalStorage("characters", []);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  let [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value);
    const filtered = characters.filter(character => {
      if (character.name.toLocaleLowerCase().indexOf(e.target.value) !== -1) {
        return character;
      }
    });
    setFilteredCharacters(filtered);
  }

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        const newCharacters = response.data.results.map(item => {
          return {
            id: item.id,
            name: item.name,
            image: item.image,
            status: item.status,
            species: item.species,
            origin: item.origin.name,
            location: item.location.name,
            episodes: item.episode.length
          };
        });

        setCharacters(newCharacters);
        setFilteredCharacters(newCharacters);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
      <SearchForm value={search} onChange={handleSearch} />
      <section className="character-list grid-view">
        {filteredCharacters.map(({ id, image, name, status, species, origin, location, episodes }) => {
          return (
            <Card key={id}>
              <div className="image-container">
                <img src={image} alt={name} />
              </div>
              <div className="content-container">
                <h2>{name}</h2>
                <p className="meta-data">
                  {species} {status}
                </p>
                <div className="description">
                  <p>Location: {location}</p>
                  <p>Origin: {origin}</p>
                </div>
              </div>
              <div className="content-container extra">
                <a href="#">{episodes} Episodes</a>
              </div>
            </Card>
          );
        })}
      </section>
    </React.Fragment>
  );
}
