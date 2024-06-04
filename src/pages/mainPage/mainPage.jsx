import React from 'react'
import Calendar from '../../components/calendar/calendar'
import Banner from '../../components/banner/banner'
import Car from '../../components/car/car'
import Num from '../../components/number cor/num'
import Timer from '../../components/timer/timer'
import GameSection from '../../components/gamesection/game'
import Watch from '../../components/watch/watch'
import Partners from '../../components/partners/partner'
import cs22 from '../../assets/header/Frame 5 (2).svg'
import FAQ from '../../components/questions/question'





export default function MainPage() {
  return (
    <>
    <Banner/>

    {/* <Calendar/> */}
    <Car/>
    {/* <Num/> */}
    <GameSection/>
    <Watch/>
    <Partners/>
    <FAQ/>

    </>
  )
}
