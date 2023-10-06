import { useState, useContext, useEffect } from "react";
import { rateContext } from "./utils/RateContext";
import { Select } from "./Select";

export const App = () => {
  const { rates, fetchRate } = useContext(rateContext);

  const [firstRate, setFirstRate] = useState("USD");
  const [secondRate, setSecondRate] = useState("USD");
  const [firstValue, setFirstValue] = useState(1);
  const [secondValue, setSecondValue] = useState(1);

  useEffect(() => {
    setFirstValue(secondValue * rates.rates[firstRate]);
  }, [firstRate]);

  useEffect(() => {
    setSecondValue(firstValue * rates.rates[secondRate]);
  }, [secondRate]);

  function secondInputHandle(event) {
    setSecondValue(event.target.value);
    setFirstValue(event.target.value * rates.rates[firstRate]);
  }

  function firstInputHandle(event) {
    setFirstValue(event.target.value);
    setSecondValue(event.target.value * rates.rates[secondRate]);
  }

  return (
    <div className="convert-cont">
      <div className="value-rate-row">
        <Select onChange={(value) => setFirstRate(value)} />
        <input
          className="value-rate"
          value={firstValue}
          onInput={(event) => firstInputHandle(event)}
          onFocus={() => fetchRate(firstRate)}
        />
      </div>
      <div className="value-rate-row">
        <Select onChange={(value) => setSecondRate(value)} />
        <input
          className="value-rate"
          value={secondValue}
          onInput={(event) => secondInputHandle(event)}
          onFocus={() => fetchRate(secondRate)}
        />
      </div>
    </div>
  );
};
