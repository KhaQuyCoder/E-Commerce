import { useEffect, useState } from "react";

export const useFetchData = (urlAPI) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(urlAPI)
      .then((rep) => rep.json())
      .then((data) => setData(data));
  }, []);
  return data;
};
