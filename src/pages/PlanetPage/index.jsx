import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../components/Loading";

const PlanetPage = () => {
  const [planet, setPlanet] = useState(null);
  const params = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://swapi.dev/api/planets/" + params.id + "/")
      .then((res) => res.json())
      .then((res) => {
        setPlanet(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (planet === null || loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>{planet.name}</h1>
      <p>Период ротации: {planet.rotation_period}</p>
      <p>Орбитальный период: {planet.orbital_period}</p>
      <p>Диаметр: {planet.diameter}</p>
      <p>Климат: {planet.climate}</p>
      <p>Гравитация: {planet.gravity}</p>
      <p>Местность: {planet.terrain}</p>
      <p>Население: {planet.population}</p>
    </div>
  );
};

export default PlanetPage;
