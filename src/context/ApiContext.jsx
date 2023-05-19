/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";

const ApiContext = createContext([]);

export const useApiContext = () => useContext(ApiContext);

export const ApiContextProvider = ({ children }) => {
  const testing = () => {
    return "All Working Good Here";
  };

  return (
    <ApiContext.Provider value={{ testing }}>{children}</ApiContext.Provider>
  );
};
