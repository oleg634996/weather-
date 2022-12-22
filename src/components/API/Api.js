import axios from "axios";

const API = "121866bca3a5499c9bd92044222405";

function ForecastFetch(event) {
  const fetch = axios.get(
    `http://api.weatherapi.com/v1/forecast.json?key=${API}&q=${event}&days=5`
  );
  return fetch;
}

export default ForecastFetch;
