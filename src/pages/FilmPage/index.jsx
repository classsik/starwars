import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../components/Loading";

const FilmPage = () => {
  const params = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://swapi.dev/api/films/" + params.id + "/")
      .then((res) => res.json())
      .then((res) => {
        setFilm(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (film === null || loading) {
    return <Loading />;
  }

  return (
    <div className="film__page">
      <h1>{film.title}</h1>
      <p>Режиссер: {film.director}</p>
      <p>Продюссеры: {film.producer}</p>
      <p>Дата выхода: {film.release_date}</p>
      <p>Титры: {film.opening_crawl}</p>
    </div>
  );
};

export default FilmPage;
