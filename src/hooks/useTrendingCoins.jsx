import { useEffect, useState } from "react";
import getTrendingCoins from "../utils/getTrendingCoins";

function useTrendingCoins() {
  const [trending, setTrending] = useState([]);
  const [loadTrending, setLoadTrending] = useState(false);

  useEffect(() => {
    setLoadTrending(true);
    getTrendingCoins().then((data) => {
      setTrending(data);
      setLoadTrending(false);
    });
  }, []);

  return { trending, loadTrending };
}

export default useTrendingCoins;
