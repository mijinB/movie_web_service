import { useEffect, useState } from "react";

function App() {
  const exchangeRateResult = document.getElementById("exchange-rate-result");

  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myUSD, setMyUSD] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(res => res.json())
      .then(json => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onCoinChange = (event) => {
    setMyUSD(event.target.value);
  }

  const onExchangeRate = (event) => {
    exchangeRateResult.innerHTML = `<strong>result👉</strong> ${myUSD / event.target.value}💲`;
  }

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading
        ? <strong>Loading...</strong>
        : <>
          <input
            value={myUSD}
            type="number"
            placeholder="Please Write your USD"
            onChange={onCoinChange}
          />
          <strong> USD</strong>
          <br />
          <select
            onChange={onExchangeRate}
            style={{ marginTop: 10, marginBottom: 10 }}
          >
            {coins.map(coin => (
              <option
                key={coin.id}
                value={coin.quotes.USD.price}
              >
                {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <div id="exchange-rate-result"></div>
        </>
      }
    </div>
  );
}

export default App;
