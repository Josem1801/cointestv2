import React from "react";
import useCoins from "../../hooks/useCoins";
import CoinRow from "../CoinRow";
import Loader from "../Loader";
import "./listOfCoins.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
function ListOfCoins() {
  const { coins, loading, setPagination, pagination } = useCoins();

  const handleLastPag = () => {
    if (pagination <= 1) return;
    setPagination((prev) => prev - 1);
  };

  const handleNextPag = () => {
    setPagination((prev) => prev + 1);
  };
  const handlePag = (pag) => {
    setPagination(pag);
  };
  return (
    <section className="coins">
      <h2>Precios de las criptomonedas</h2>
      <div className="row row__header">
        <div></div>
        <span>#</span>
        <span>Image</span>
        <span>Name</span>
        <span>Symbol</span>
        <span>Price</span>
        <span>Market Cap</span>
        <span>24h %</span>
      </div>

      {loading ? (
        <Loader />
      ) : (
        coins.map((coin) => (
          <CoinRow
            key={coin.id}
            id={coin.id.toLowerCase()}
            rank={coin.market_cap_rank}
            image={coin.image}
            price={coin.current_price}
            name={coin.name}
            symbol={coin.symbol}
            marketCap={coin.market_cap}
            dayPercent={coin.price_change_percentage_24h}
          />
        ))
      )}
      <div className="coins__pagination">
        <button onClick={handleLastPag} className="coins__pagination-btn">
          <GrFormPrevious />
        </button>
        {[
          pagination - 3,
          pagination - 2,
          pagination - 1,
          pagination,
          pagination + 1,
          pagination + 2,
          pagination + 3,
        ].map((number) => {
          if (number < 1) return null;
          return (
            <button
              key={number}
              onClick={() => handlePag(number)}
              className={`coins__pagination-btn ${
                number === pagination && "active"
              } `}
            >
              {number}
            </button>
          );
        })}
        <button onClick={handleNextPag} className="coins__pagination-btn">
          <GrFormNext />
        </button>
      </div>
    </section>
  );
}

export default ListOfCoins;
