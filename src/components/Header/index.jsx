import React from "react";
import "./style.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <Link className="header__logo" to={"/"}>
          Звездные войны
        </Link>
        <div className="header__menu">
          <Link to="/heroes">Герои</Link>
          <Link to="/planets">Планеты</Link>
          <Link to="/starships">Корабли</Link>
          <Link to="/vehicles">Транспорт</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
