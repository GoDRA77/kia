import React, { useState, useEffect } from "react";
import "./car.css";
import d1 from "../../assets/car/Frame 1 (1).svg";
import d2 from "../../assets/car/kiiia 1.svg";
import bgcar from "../../assets/car back.svg";

export default function Car() {
  return (
    <div className="wrapp-car" style={{ backgroundImage: `url(${bgcar})` }}>
      <div className="containerr">
        <div className="coneiner-car">
          <div className="title-car">
            <img src={d1} alt="" />
          </div>
          <div className="car-content">
            <div className="car-text">
              <div>
                На нашем киберспортивном турнире мы с гордостью будем
                использовать инновационный электромобиль KIA EV9.
              </div>
              <div>
                Этот передовой автомобиль способен раздавать электричество, что
                позволяет нам питать компьютеры и оборудование прямо с его
                батареи. Благодаря KIA EV9, мы обеспечим стабильное и надежное
                энергоснабжение, необходимое для бесперебойного проведения
                соревнований.
              </div>
              <div>
                Кроме того, использование электромобиля снижает углеродный след
                и способствует защите окружающей среды. KIA EV9 предоставляет
                нам гибкость в организации турниров, позволяя проводить
                мероприятия в любых местах без привязки к стационарным
                источникам энергии.
              </div>
            </div>
            <div className="car-img">
              <img src={d2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
