import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../components/Loading";

const HeroPage = () => {
  const [hero, setHero] = useState(null);
  const params = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://swapi.dev/api/people/" + params.id + "/")
      .then((res) => res.json())
      .then((res) => {
        setHero(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (hero === null || loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>{hero.name}</h1>
      <p>Рост: {hero.height}</p>
      <p>Вес: {hero.mass}</p>
      <p>Цвет волос: {hero.hair_color}</p>
      <p>Цвет кожи: {hero.skin_color}</p>
      <p>Цвет глаз: {hero.eye_color}</p>
      <p>Дата рождения: {hero.birth_year}</p>
      <p>Пол: {hero.gender}</p>
    </div>
  );
};

export default HeroPage;
