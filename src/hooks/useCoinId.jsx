import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
function useCoinId({ id }) {
  const [coinData, setCoinData] = useState([]);
  const [loadingCoinsData, setLoadingCoinsData] = useState(false);
  useEffect(() => {
    setLoadingCoinsData(true);
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
      )
      .then(({ data }) => {
        setCoinData(data);
        setLoadingCoinsData(false);
      })
      .catch((e) => {
        setCoinData(404);
        setLoadingCoinsData(false);
      });
  }, [id]);
  return { coinData, loadingCoinsData };
}

export default useCoinId;

useCoinId.propTypes = {
  id: PropTypes.string.isRequired,
};
