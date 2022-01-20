import React from "react";
import Card from "./Card";
import pick from "../assets/pick.jpg";
import update from "../assets/update.jpg";
import delivery from "../assets/delivery.png";

function Info() {
  return (
    <div className="container">
      <h1 className="text-center">
        Служба доставки на которую можете положиться
      </h1>
      <div className="cards">
        <Card
          title="Выбирайте все, что вам понравится"
          subtitle="Выбирайте продукты из любимых магазинов на сайте КорЗина, и мы вам доставим продукты в ближайший час."
          img={pick}
        />
        <Card
          title="Следите за статусом вашего заказа в реальном времени"
          subtitle="Наши сотрудники активно с вами общаются во время выбора продуктов и делают все максимально удобным для вас."
          img={update}
        />
        <Card
          title="Получите свои заказенные товары в течении часа"
          subtitle="Доставим все ваши продукты в течении часа, или же в удобное вам время. Если не успеем, заказ на наш счёт!"
          img={delivery}
        />
      </div>
    </div>
  );
}

export default Info;
