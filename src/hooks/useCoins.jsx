import { useEffect, useState } from "react";
import getCoins from "../utils/getCoins";

function useCoins() {
  const [coins, setCoin] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState(
    localStorage.getItem("lastPagination") | 1
  );

  useEffect(() => {
    setLoading(true);

    getCoins({ page: pagination }).then((data) => {
      setCoin(data);
      setLoading(false);
      localStorage.setItem("lastPagination", pagination);
    });
  }, [setPagination, pagination]);

  return { coins, loading, pagination, setPagination };
}

export default useCoins;
