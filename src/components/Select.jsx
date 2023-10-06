import { useContext } from "react";
import { rateContext } from "./utils/RateContext";

export const Select = ({ onChange }) => {
  const { rates } = useContext(rateContext);

  const ratesKeys = Object.keys(rates.rates);

  return (
    <select onChange={(event) => onChange(event.target.value)}>
      {ratesKeys.map((key) => {
        return <option key={key}>{key}</option>;
      })}
    </select>
  );
};
