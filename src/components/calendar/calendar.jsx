import React, { useState, useEffect } from 'react';
import './calendar.css';
import a1 from '../../assets/calendar/Vector (2).svg'
import img1 from '../../assets/calendar/Group 40 (1).svg';

import img2 from '../../assets/calendar/15.svg';
import img3 from '../../assets/calendar/14.svg';
import img4 from '../../assets/calendar/Group - 1.svg';
import img5 from '../../assets/calendar/Group2.svg';
import img6 from '../../assets/calendar/Group3.svg';
import bd from '../../assets/calendar/calendar.svg'


import sc from '../../assets/calendar/scorpion 1.svg'




const events = [
  {
    date: 'June 22th-30th',
    title: 'Regional Qualifiers Asia',
    type: 'ONLINE',
    backgroundImage: 'path-to-image-1.png',
  },
  {
    date: 'July 6th-31th',
    title: 'Regional Qualifiers Europe',
    type: 'ONLINE',
    backgroundImage: 'path-to-image-2.png',
  },
  {
    date: 'Jul 25th - Aug 7th',
    title: 'Regional Qualifiers America',
    type: 'ONLINE',
    backgroundImage: 'path-to-image-3.png',
  },
  {
    date: 'August 17th - 21st',
    title: 'Regional Qualifiers Africa',
    type: 'OFFLINE',
    backgroundImage: 'path-to-image-4.png',
  },
  {
    date: 'September 6th - 14th',
    title: 'Regional Qualifiers Asia',
    type: 'OFFLINE',
    backgroundImage: 'path-to-image-5.png',
  },
  {
    date: 'November 11th - 19th',
    title: 'World Esports Championship',
    type: 'OFFLINE',
    backgroundImage: 'path-to-image-6.png',
  },
  {
    date: 'December 1st - 10th',
    title: 'Regional Qualifiers Australia',
    type: 'OFFLINE',
    backgroundImage: 'path-to-image-7.png',
  },
  {
    date: 'December 15th - 20th',
    title: 'Regional Qualifiers Antarctica',
    type: 'ONLINE',
    backgroundImage: 'path-to-image-8.png',
  },
  // Add more events as needed
];

export default function Calendar() {
  const itemsPerPage = 6; // Number of items to display per page
  const totalPages = Math.ceil(events.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrevClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };




  const currentEvents = events.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);



  useEffect(() => {
    const photoContainers1 = document.querySelectorAll('.photo-container1');
    const photoContainers2 = document.querySelectorAll('.photo-container2');
    // const photoContainers3 = document.querySelectorAll('.photo-container3');
    
    const checkBox = (elements) => {
      const trigger = window.innerHeight / 5 * 4;

      elements.forEach((element) => {
        const topOfBox = element.getBoundingClientRect().top;

        if (topOfBox < trigger) {
          element.classList.add('show');
        } else {
          element.classList.remove('show');
        }
      });
    };

    const handleScroll = () => {
      checkBox(photoContainers1);
      checkBox(photoContainers2);
    //   checkBox(photoContainers3);
    };

    window.addEventListener('scroll', handleScroll);

    // Вызываем handleScroll сразу после загрузки страницы, чтобы определить положение
    handleScroll();
    
    return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


  return (
    <>
    <div className="wrapp-main">
    <div className="wrapper-calen" >
    <div className="events-calendar">
      <div className="calendar-header">
        <h1>КАЛЕНДАРЬ СОБЫТИЙ</h1>
        <div className="navigation">
          

        </div>
      </div>
<div className="wrap-cal">
<button onClick={handlePrevClick} disabled={currentPage === 0}>
            <img src={a1} alt="" />
          </button>
      <div className="events-slider-wrapper">
      
        <div className="events-slider" style={{ transform: `translateX(${-currentPage * 100}%)` }}>
           
            <div className="event" >
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                {/* <img src={img5} alt="" /> */}
                {/* <img src={img6} alt="" /> */}
            </div>
            <div className="event" >
            {/* <img src={img1} alt="" /> */}
                {/* <img src={img2} alt="" /> */}
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
            </div>
          
          

        
        </div>
        
      </div>
      <button onClick={handleNextClick} disabled={currentPage === totalPages - 1}>
      <img src="./src/assets/calendar/btn-r.svg" alt="" />
          </button>
    </div></div>
    {/* <div className= 'photo-container1' >
      <img src={sc} alt="Your Photo" className="scroll-photo" />
    </div> */}
    <div className="ovv">
    </div>
    </div>
    </div>

    </>
    
  );
}
