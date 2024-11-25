import React, { useState } from "react";
import { createContext } from "react";

export const State = createContext();

const ManagerState = ({ children }) => {
  const [countHeart, setCountHeart] = useState(0);
  const [countCart, setCountCart] = useState(0);
  const [showHeart, setShowHeart] = useState(0);
  const [checkLogin, setCheckLogin] = useState(false);
  const [listHearts, setListsHeart] = useState([]);
  const [listCarts, setListsCarts] = useState([]);
  const [infor, setInfor] = useState(Array(9).fill(""));

  return (
    <State.Provider
      value={{
        countHeart,
        setCountHeart,
        countCart,
        setCountCart,
        showHeart,
        setShowHeart,
        listHearts,
        setListsHeart,
        checkLogin,
        setCheckLogin,
        listCarts,
        setListsCarts,
        infor,
        setInfor,
      }}
    >
      {children}
    </State.Provider>
  );
};

export default ManagerState;
