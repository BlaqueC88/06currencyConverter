import { useState, useEffect } from "react";


function useCurrencyInfo(currency) {
  const [currencies, setCurrencies] = useState({});

  useEffect(() => {
    // (`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/${currency}.json`)
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then(res => res.json())
    .then(data => setCurrencies(data[currency]));

  }, [currency])

  console.log(currencies);
  
  return currencies;
}

export default useCurrencyInfo;
