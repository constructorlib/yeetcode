import React from "react";
import "./test.css";
import Header from "../header/Header";
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
      <Header />
      <div className="testWrapper">
        <div className="card">
          <Savol />
          <Javob />
          <Savol />
          <Javob />
          <Savol />
          <Javob />
        </div>
        <div className="testPassed">
          <div className="passWrapper">
            <div className="passTitle">
              <h4>6/11 tests passed, 5 more tests left!</h4>
            </div>
            <div className="passCredit">
              <div className="correct">1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div className="correct">5</div>
              <div>6</div>
              <div className="correct">7</div>
              <div>8</div>
              <div className="correct">9</div>
              <div className="correct">10</div>
              <div className="correct">11</div>
            </div>
          </div>
          <div className="improve">
            <h4>Here's what you could do to improve your score!</h4>
            <div className="advice">
              <p>1) Git gud, lol</p>
              <p>2) Git gud, lol</p>
              <p>3) Git gud, lol</p>
              <p>4) Git gud, lol</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
