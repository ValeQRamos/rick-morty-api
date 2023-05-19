/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";

const ApiContext = createContext([]);

export const useApiContext = () => useContext(ApiContext);

export const ApiContextProvider = ({ children }) => {
  const testing = () => {
    return "Esta funcionando Correcto";
  };

  return (
    <ApiContext.Provider value={{ testing }}>{children}</ApiContext.Provider>
  );
};
