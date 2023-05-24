/* eslint-disable react/prop-types */

// components
import Character from "../Character/Character";

const Residents = ({ handleResidents, residentList }) => {
  return (
    <div className="residents-container">
      <button onClick={handleResidents}>
        {!residentList.length ? "Show Residents" : "Hide Residents"}
      </button>
      <div className="residents-list">
        {residentList.map((character) => {
          return <Character key={character.id} character={character} />;
        })}
      </div>
    </div>
  );
};
export default Residents;
