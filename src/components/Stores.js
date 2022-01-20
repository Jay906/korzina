import React from "react";
import magnit from "../assets/magnit.png";
import lenta from "../assets/lenta.png";
import pyatyorochka from "../assets/pyatyorochka.png";
import perekrestok from "../assets/perekrestok.png";
import dixy from "../assets/dixy.png";
import vkusvill from "../assets/vkusvill.png";
import okey from "../assets/okey.png";
import Store from "./Store";

const stores = [
  { title: "Магнит", icon: magnit },
  { title: "Лента", icon: lenta },
  { title: "Пятерочка", icon: pyatyorochka },
  { title: "Перекрёсток", icon: perekrestok },
  { title: "ВкусВилл", icon: vkusvill },
  { title: "Дикси", icon: dixy },
  { title: "О'кей", icon: okey },
];

function Stores() {
  return (
    <div className="container">
      <h1 className="text-center">Магазины поблизости</h1>
      <div className="stores-list">
        {stores.map((store, index) => (
          <Store key={index} title={store.title} icon={store.icon} />
        ))}
      </div>
    </div>
  );
}

export default Stores;
