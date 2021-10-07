import useDataForChart from "../../hooks/useDataForChart";
import NotFound from "../../components/NotFound";
import React, { useState } from "react";
import { useParams } from "react-router";
import Loader from "../../components/Loader";
import useCoinId from "../../hooks/useCoinId";
import "./detail.css";
import CreateChart from "../../components/CreateChart";
import { BsLink45Deg } from "react-icons/bs";
import { formatNumber } from "../../components/CoinRow";
import DOMPurify from "dompurify";
function Detail() {
  const [days, setDays] = useState(1);
  const [interval, setInterval] = useState("minutely");
  const { currency } = useParams();

  const { chartData } = useDataForChart({
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
                <h2 className="btn-gray ">{coinData.symbol.toUpperCase()}</h2>
              </div>
              <div className="detail__hero-links">
                <span className="rank">Puesto # {coinData.coingecko_rank}</span>
                <a
                  href={coinData.links.homepage[0]}
                  className="btn-gray white"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLink45Deg fontSize={16} />
                  {coinData.links.homepage[0]}
                </a>
              </div>
            </div>
            <div className="detail__hero-price">
              <p>Precio de {coinData.name}</p>
              <div>
                ${formatNumber(coinData.market_data.current_price.usd)}{" "}
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
            {<CreateChart data={chartData} />}
          </section>
          <section className="detail__description">
            <h3>What is {coinData.name}?</h3>

            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(coinData.description.en),
              }}
            ></div>
          </section>
        </>
      )}
    </main>
  );
}

export default Detail;
