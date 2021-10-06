import axios from 'axios'
/**
 * @returns list of trending coins 
 */
async function getTrendingCoins() {
  try{
    const {data: {coins}} = await axios.get("https://api.coingecko.com/api/v3/search/trending")
    return coins
  }catch(e) {

    throw new Error("Error", e)
  }
}

export default getTrendingCoins
