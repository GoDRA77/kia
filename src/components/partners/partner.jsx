// import React from 'react';
// import './partner.css';
// import ala from '../../assets/org/1.svg'
// import sanarip from '../../assets/org/2.svg'
// import kiaorig from '../../assets/org/3.svg'
// import flag from '../../assets/org/4.svg'


// const Partners = () => {
//     return (
//         <div>
//             <section className="sponsors" id="sponsors">
//                 <div className="container">
//                     <h1 className="title">Спонсоры</h1>
//                     <div className="sponsor-container">
//                         <div className="sponsor-item">
//                             <img src={ala} className="sponsor-image" alt="Спонсор 1"/>
//                         </div>
//                         <div className="sponsor-item">
//                             <img src={sanarip} className="sponsor-image" alt="Спонсор 2"/>
//                         </div>
//                         <div className="sponsor-item">
//                             <img src={kiaorig} className="sponsor-image" alt="Спонсор 3"/>
//                         </div>
//                         <div className="sponsor-item">
//                             <img src={flag} className="sponsor-image" alt="Спонсор 4"/>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Partners;


import React from 'react';
import './partner.css';
import ala from '../../assets/org/1.svg';
import sanarip from '../../assets/org/2.svg';
import kiaorig from '../../assets/org/3.svg';
import flag from '../../assets/org/4.svg';

const Partners = () => {
    return (
        <div>
            <section className="sponsors" id="sponsors">
                <div className="container">
                    <h1 className="title">Спонсоры</h1>
                    <div className="sponsor-container">
                        <div className="sponsor-item">
                            <img src={ala} className="sponsor-image" alt="Ала-Тоо"/>
                            <div className="sponsor-name">Ала-Тоо</div>
                        </div>
                        <div className="sponsor-item">
                            <img src={sanarip} className="sponsor-image" alt="Санарип" style={{background:"white"}}/>
                            <div className="sponsor-name">Жогорку кенеш</div>
                        </div>
                        <div className="sponsor-item">
                            <img src={kiaorig} className="sponsor-image" alt="KIA"/>
                            <div className="sponsor-name">Movement that inspires</div>
                        </div>
                        <div className="sponsor-item">
                            <img src={flag} className="sponsor-image" alt="Flag"/>
                            <div className="sponsor-name">Федерация Компьютерного Спорта</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Partners;