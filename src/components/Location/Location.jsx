/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";

// components
import Residents from "../Residents/Residents";

const Location = ({ characterLocation }) => {
  const [residentList, setResidentList] = useState([]);

  const handleResidents = () => {
    try {
      if (residentList.length) {
        setResidentList([]);
      } else {
        characterLocation.residents.map(async (resident) => {
          const { data } = await axios(resident);
          setResidentList((prev) => [...prev, data]);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="character-location-container">
      {characterLocation && (
        <div>
          <h3>Name: {characterLocation?.name}</h3>
          <h3>Type: {characterLocation?.type} </h3>
          {characterLocation?.dimension !== "unknown" && (
            <h3>Dimension: {characterLocation?.dimension} </h3>
          )}
          <Residents
            handleResidents={handleResidents}
            residentList={residentList}
          />
        </div>
      )}
    </div>
  );
};
export default Location;
