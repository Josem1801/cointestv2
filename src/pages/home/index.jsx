import ListOfCoins from "../../components/ListOfCoins";
import TrendingCoins from "../../components/TrendingCoins";
import React from "react";
import "./home.css";
function Home() {
  return (
    <div className="home">
      <TrendingCoins />
      <ListOfCoins />
      <footer></footer>
    </div>
  );
}

export default Home;
