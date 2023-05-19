import { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      <h1>TESTING LIST</h1>

      <div>
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <button disabled={page >= 42} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <img src={character.image} alt={character.name} />
            <h3> {character.name} </h3>
          </div>
        );
      })}
    </div>
  );
};
export default Characters;
