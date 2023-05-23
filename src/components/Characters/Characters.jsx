/* eslint-disable react-hooks/exhaustive-deps */
import "./Characters.css";
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import Character from "../Character/Character";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const url = `https://rickandmortyapi.com/api/character?page=${page}`;

  const fetchAllCharacters = async () => {
    try {
      const { data } = await axios(url);
      setCharacters(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCharacters();
  }, [url]);

  if (isLoading) {
    return <h1> Loading... </h1>;
  }

  return (
    <div className="characters-container">
      <div className="characters-buttons">
        <button
          className="character-btn"
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        <p> Page {page} </p>
        <button
          className="character-btn"
          disabled={page >= 42}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
      <div className="characters">
        {characters.map((character) => {
          return <Character key={character.id} character={character} />;
        })}
      </div>
    </div>
  );
};
export default Characters;
