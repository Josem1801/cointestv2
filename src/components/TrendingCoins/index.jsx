import useTrendingCoins from "../../hooks/useTrendingCoins";
import React from "react";
import { Link } from "react-router-dom";
import "./trendingCoins.css";
function TrendingCoins() {
  const { trending } = useTrendingCoins();

  return (
    <section className="trending">
      <h3>7 trending coins</h3>
      <div className="trending__container">
        {trending.map(({ item }) => (
          <Link
            to={`/currencies/${item.id}`}
            className="trending__card"
            key={item.id}
          >
            <img src={item.small} alt={item.name} />
            <span className="score">{item.score + 1}</span>
            <span>
              {item.name} ({item.symbol})
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default TrendingCoins;
