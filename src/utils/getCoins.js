import axios from 'axios'
import PropTypes from 'prop-types'

/**
 * 
 * @param {string} currency Type of currency convertion 
 * @param {number} limitPerPage limit of coins per petition
 * @param {number} page Current pagination
 * @returns List of crypto currency
 * @see https://www.coingecko.com/es/api/documentation
 */

async function getCoins({currency="usd", limitPerPage=20, page=1}) {
  try{
    const {data} = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${limitPerPage}&page=${page}&sparkline=false`)

    return data
  }catch(e) {
 
    throw new Error(e)
  }
}

export default getCoins

getCoins.propTypes= {
  currency: PropTypes.string,
  limitPerPage: PropTypes.number,
  page: PropTypes.number,
}

getCoins.defaultProps = {
  currency: "usd",
  limitPerPage: 20,
  page: 1
}


