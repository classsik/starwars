import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../components/Loading";

const StarshipPage = () => {
  const [starship, setStarship] = useState(null);
  const params = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://swapi.dev/api/starships/" + params.id + "/")
      .then((res) => res.json())
      .then((res) => {
        setStarship(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (starship === null || loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>{starship.name}</h1>
      <p>Модель: {starship.model}</p>
      <p>Производитель: {starship.manufacturer}</p>
      <p>Цена в кредитах: {starship.cost_in_credits}</p>
      <p>Длина: {starship.length}</p>
      <p>Макс. скорость: {starship.max_atmosphering_speed}</p>
      <p>Экипаж: {starship.crew}</p>
      <p>Пассажиры: {starship.passengers}</p>
      <p>Грузоподъемность: {starship.cargo_capacity}</p>
      <p>Класс: {starship.starship_class}</p>
      <p>MGLT: {starship.MGLT}</p>
    </div>
  );
};

export default StarshipPage;
