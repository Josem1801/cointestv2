import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
/**
 *
 * @param {currency} param0 is required the currency
 * @param {days} param0 default day: 1
 * @param {interval} param0 default interval: minutely ["minutely", "hourly", "dayly"]
 * @returns
 */
function useDataForChart({ currency, days = 1, interval = "minutely" }) {
  const [chartData, setChartData] = useState([]);
  const [loadingChart, setLoadingChart] = useState(false);

  useEffect(() => {
    setLoadingChart(true);
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${currency}/market_chart?vs_currency=usd&days=${days}&interval=${interval}`
      )
      .then(({ data: { prices } }) => {
        const newData = prices.map((arr) => {
          return {
            date: new Date(arr[0]).toISOString().substr(0, 10),
            value: arr[1],
          };
        });

        setChartData(newData);
        setLoadingChart(false);
      })
      .catch((e) => {
        setChartData(404);
        setLoadingChart(false);
      });
  }, [days, currency, interval]);
  return { chartData, loadingChart };
}

export default useDataForChart;

useDataForChart.propTypes = {
  currency: PropTypes.string.isRequired,
  days: PropTypes.number.isRequired,
  interval: PropTypes.oneOf[("minutely", "hourly", "daily")],
};

useDataForChart.defaultProps = {
  days: 1,
  interval: "minutely",
};
