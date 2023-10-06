import { useState, createContext, useEffect } from "react";

export const rateContext = createContext();

export const RateContext = ({ children }) => {
  const fetchRate = async (rate) => {
    const response = await fetch(`https://open.er-api.com/v6/latest/${rate}`);
    const data = await response.json();

    return setRates(data);
  };

  const [rates, setRates] = useState();

  useEffect(() => {
    fetchRate("USD");
  }, []);

  const funcs = {
    fetchRate,
    rates,
  };
  if (rates) {
    return (
      <rateContext.Provider value={funcs}>{children}</rateContext.Provider>
    );
  }
};
