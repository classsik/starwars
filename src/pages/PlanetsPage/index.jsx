import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Loading from "../../components/Loading";

const PlanetsPage = () => {
  const [planets, setPlanets] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://swapi.dev/api/planets/")
      .then((res) => res.json())
      .then((res) => {
        setPlanets(res.results);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <h1>Планеты</h1>
      <br />
      <div className="planets">
        {planets.map((item, index) => {
          return (
            <div
              className="planet"
              onClick={() => navigate("/planet/" + (index + 1))}
            >
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PlanetsPage;
