import React from "react";
import Calendar from "../../components/calendar/calendar";
import Banner from "../../components/banner/banner";
import Car from "../../components/car/car";
import Num from "../../components/number cor/num";
import Timer from "../../components/timer/timer";
import GameSection from "../../components/gamesection/game";
import Watch from "../../components/watch/watch";
import Partners from "../../components/partners/partner";
import cs22 from "../../assets/header/Frame 5 (2).svg";
import FAQ from "../../components/questions/question";
import Header from "../../components/header/header";
import Calendar2 from "../../components/calendar2/calendar2";
import "./mainPage.css";

export default function MainPage() {
  return (
    <>
      <Header />
      <Banner />
      <div className="wrap-calendar-sec">
        <Calendar />
      </div>
      <div className="wrap-calendar2-sec" style={{ display: "none" }}>
        <Calendar2 />
      </div>

      <Car />
      <Num />
      <GameSection />
      <Watch />
      <Partners />
      <FAQ />
    </>
  );
}
