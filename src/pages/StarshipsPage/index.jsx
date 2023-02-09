import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Loading from "../../components/Loading";

const StarshipsPage = () => {
  const [starships, setStarships] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://swapi.dev/api/starships/")
      .then((res) => res.json())
      .then((res) => {
        setStarships(res.results);
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
      <h1>Корабли</h1>
      <br />
      <div className="starships">
        {starships.map((item, index) => {
          return (
            <div
              className="starship"
              onClick={() => navigate("/starship/" + (index + 2))}
            >
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StarshipsPage;
