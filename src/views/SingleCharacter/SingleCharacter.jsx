import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleCharacter = () => {
  const { id } = useParams();
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCharacter = async () => {
    try {
      const { data } = await axios(url);
      setCharacter(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  if (isLoading) {
    return <h1> Loading... </h1>;
  }

  return (
    <div>
      <h1>
        {character.name} - {character.status}
      </h1>
    </div>
  );
};
export default SingleCharacter;
