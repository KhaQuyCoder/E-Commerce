import React, { useState } from "react";
import { createContext } from "react";

export const State = createContext();

const ManagerState = ({ children }) => {
  const [countHeart, setCountHeart] = useState(0);
  const [countCart, setCountCart] = useState(0);

  return (
    <State.Provider
      value={{ countHeart, setCountHeart, countCart, setCountCart }}
    >
      {children}
    </State.Provider>
  );
};

export default ManagerState;
