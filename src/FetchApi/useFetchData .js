import { useEffect, useState } from "react";

export const useFetchData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=30")
      .then((rep) => rep.json())
      .then((data) => setData(data));
  }, []);
  return data;
};
