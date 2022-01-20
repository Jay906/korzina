import React from "react";
import korzina from "../assets/korzina.jpg";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Более 500 миллионов продуктов",
    content: "можете выбрать из нашего широкого ассортимента",
  },
  {
    title: "40,000 магазинов, партнеров",
    content: "от локальных продуктовых до больших супермаркетов",
  },
  {
    title: "В 43 городах России и Казахстана",
    content: "Предоставляем услуги на территории России и Казахстана",
  },
  {
    title: "Сотни тысяч заказов каждый день",
    content: "быстрая оформление и доставка еще быстрее",
  },
];

function About() {
  return (
    <div className="container about">
      <h1 className="text-center">
        Прогрессирующая площадка для онлайн заказов
      </h1>
      <img src={korzina} alt="корзина продуктов" />
      <div className="service-cards">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            subtitle={service.content}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
