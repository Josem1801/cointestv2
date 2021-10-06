import React from "react";
import Search from "../Search";
import "./header.css";
function Header() {
  return (
    <header className="header">
      <a href="/home">
        <h1 className="header__logo">CoinTest</h1>
      </a>
      <nav className="header__menu">
        <ul>
          {listOfPages.map((page, i) => (
            <li key={i}>
              <a href={page.toLowerCase().replace(/ /g, "")}>{page}</a>
            </li>
          ))}
        </ul>
      </nav>
      <Search />
    </header>
  );
}

export default Header;

const listOfPages = [
  "Cryptomonedas",
  "Intercambios",
  "NFT",
  "Portafolio",
  "Lista de seguimiento ▼",
];
