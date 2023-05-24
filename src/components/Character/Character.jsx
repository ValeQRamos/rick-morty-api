/* eslint-disable react/prop-types */
import "./Character.css";

import { Link } from "react-router-dom";

const Character = ({ character }) => {
  return (
    <div className="character">
      <img src={character.image} alt={character.name} />
      <div className="character-info">
        <h3 className="character-name">{character.name}</h3>
        <Link className="character-link" to={`/character/${character.id}`}>
          Details
        </Link>
      </div>
    </div>
  );
};
export default Character;
