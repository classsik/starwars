import React from "react";
import { useNavigate } from "react-router";

import "./style.css";

const Film = ({ item, index }) => {
  const navigate = useNavigate();

  return (
    <div className="film" onClick={() => navigate(`/film/${index + 1}`)}>
      <h2>{item.title}</h2>
      <p>Режиссер: {item.director}</p>
      <p>Продюссеры: {item.producer}</p>
      <p>Дата выхода: {item.release_date}</p>
    </div>
  );
};

export default Film;
