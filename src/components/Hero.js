import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

function Hero() {
  return (
    <div className="hero">
      <div>
        <h1>Закажите продукты, а мы доставим!</h1>
        <div className="address">
          <span className="icon icon-left">
            <MdLocationOn />
          </span>
          <input placeholder="Напишите ваш адрес..." />
          <span className="icon icon-right">
            <AiOutlineArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
