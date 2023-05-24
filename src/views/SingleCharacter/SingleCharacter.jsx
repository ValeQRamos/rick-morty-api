import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Components
import Location from "../../components/Location/Location";

const SingleCharacter = () => {
  const { id } = useParams();
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const [character, setCharacter] = useState(null);
  const [characterLocation, setCharacterLocation] = useState(null);
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

  const fetchLocation = async () => {
    try {
      if (!characterLocation) {
        const { data } = await axios(character.location.url);
        setCharacterLocation(data);
      } else {
        setCharacterLocation(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  if (isLoading) {
    return <h1> Loading... </h1>;
  }

  const { name, status, species, type, gender, location, image } = character;

  return (
    <div className="details-container">
      <div className="details-img">
        <img src={image} alt={name} />
      </div>
      <div className="details-info">
        <h1>Name: {name}</h1>
        {type && <p> Type: {type} </p>}
        <p>Gender: {gender}</p>
        <p>Species: {species}</p>
        {status !== "unknown" && <p>Status: {status}</p>}
      </div>
      {location.name !== "unknown" && (
        <div className="details-location">
          <p>Location: {location.name}</p>
          <button onClick={fetchLocation}>
            {!characterLocation
              ? "Show Location Details"
              : "Hide Location Details"}
          </button>
          <Location characterLocation={characterLocation} />
        </div>
      )}
    </div>
  );
};
export default SingleCharacter;
