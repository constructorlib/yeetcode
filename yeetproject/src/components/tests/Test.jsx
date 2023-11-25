import React from "react";
import "./test.css";

const Exponent = ({ base, power }) => (
  <span>
    {base}
    <sup>{power}</sup>
  </span>
);
const Savol = () => {
  return (
    <div className="cardQuestion">
      <p>
        <Exponent base="Ushbu y = x" power="4" />
        <Exponent base=" va y = 2x" power="2" />
        <Exponent base=" grafikni umumiy nuqtasi nechta?" />
      </p>
    </div>
  );
};
const Javob = () => {
  return (
    <div className="cardAnswer">
      <p>a) 3</p>
      <p>b) 2</p>
      <p>c) 1</p>
      <p>d) 4</p>
    </div>
  );
};
export default function Test() {
  return (
    <div>
      <div className="testHeader"></div>
      <div className="testWrapper">
        <div className="card">
          <Savol />
          <Javob />
          <Savol />
          <Javob />
          <Savol />
          <Javob />
        </div>
      </div>
    </div>
  );
}
