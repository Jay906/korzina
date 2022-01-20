import React from "react";

function Nav() {
  return (
    <nav>
      <button className="btn menu-button">
        <span className="hamburger"></span>
      </button>
      <h1>КорЗина</h1>
      <div className="credential-buttons">
        <button className="btn">Войти</button>
        <button className="btn">Регистрация</button>
      </div>
    </nav>
  );
}

export default Nav;
