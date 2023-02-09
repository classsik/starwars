import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import Loading from "../../components/Loading";

const HeroesPage = () => {
  const [heroes, setHeroes] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((res) => {
        setHeroes(res.results);
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
      <h1>Герои</h1>
      <br />
      <div className="heroes">
        {heroes.map((item, index) => {
          return (
            <div
              className="hero"
              onClick={() => navigate("/hero/" + (index + 1))}
            >
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HeroesPage;
