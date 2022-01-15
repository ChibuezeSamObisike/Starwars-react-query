import React, { useState } from "react";
import { useQuery } from "react-query";
import Planet from "./planet";

const fetchPlanets = async (queryInfo) => {
  //Query info is the params in [] from the useQuery hooks
  let page = queryInfo.queryKey[2];
  const res = await fetch("http://swapi.dev/api/planets/?page=" + page);
  return res.json();
};

const Planets = () => {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(
    ["planets", "Hello, world", page],
    fetchPlanets
  );
  //console.log(data);

  return (
    <div>
      <h2>Planets</h2>

      <button onClick={() => setPage(1)}>page 1</button>
      <button onClick={() => setPage(2)}>page 2</button>
      <button onClick={() => setPage(3)}>page 3</button>

      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <div>
          {data.results.map((result, i) => {
            return <Planet key={i} planet={result} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Planets;
