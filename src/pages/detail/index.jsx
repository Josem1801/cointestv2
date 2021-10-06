import useDataForChart from "../../hooks/useDataForChart";
import NotFound from "../../components/NotFound";
import React, { useState } from "react";
import { useParams } from "react-router";
import Loader from "../../components/Loader";
import useCoinId from "../../hooks/useCoinId";
import "./detail.css";
import CreateChart from "../../components/CreateChart";
function Detail() {
  const [days, setDays] = useState(1);
  const [interval, setInterval] = useState("minutely");
  const { currency } = useParams();

  const { chartData, loadingChart } = useDataForChart({
    currency,
    days,
    interval,
  });
  const { coinData } = useCoinId({ id: currency });
  const letterDate = ["H", "D", "M", "M", "Y"];
  const handleDays = (day) => {
    if (day <= 7) setInterval("minutely");
    if (day === 30) setInterval("hourly");
    if (day > 30) setInterval("daily");
    setDays(day);
  };
  return (
    <main className="detail">
      {coinData === 404 ? (
        <NotFound />
      ) : coinData < 1 ? (
        <Loader />
      ) : (
        <>
          <section className="detail__hero">
            <div className="detail__hero-about">
              <div>
                <img
                  src={coinData.image.small}
                  width={50}
                  height={50}
                  alt={coinData.name}
                />
                <h1>{coinData.name}</h1>
                <h2>{coinData.symbol.toUpperCase()}</h2>
              </div>
              <div>
                <span className="rank">Puesto # {coinData.coingecko_rank}</span>
              </div>
            </div>
            <div className="detail__hero-price">
              <p>Precio de {coinData.name}</p>
              <div>
                ${coinData.market_data.current_price.usd}{" "}
                <span
                  className={
                    coinData.market_data.price_change_percentage_24h > 0 &&
                    "bull"
                  }
                >
                  {coinData.market_data.price_change_percentage_24h.toFixed(1)}%
                </span>
              </div>
            </div>
          </section>
          <section className="detail__price"></section>
        </>
      )}
      <section className="detail__chart">
        <div className="detail__chart-date">
          {[1, 7, 30, 90, 364].map((date, i) => (
            <button
              key={i}
              className={`${date === days && "day-active"}`}
              onClick={() => handleDays(date)}
            >
              {date > 7 && date < 364 ? date / 30 : date === 364 ? 1 : date}
              {letterDate[i]}
            </button>
          ))}
        </div>
        {loadingChart ? (
          <Loader variant="simple" />
        ) : (
          <CreateChart data={chartData} />
        )}
      </section>
    </main>
  );
}

export default Detail;
