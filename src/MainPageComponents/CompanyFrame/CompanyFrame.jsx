import React, { useRef } from 'react';
import style from './CompanyFrame.module.css';
import laptopPhoto from '../../Images/CompanyFrame/4d54715f5a9efbe4e0abf224c5fa5484.png';

const CompanyFrame = () => {
  const companyFrameRef = useRef(null);

  const handleExploreClick = () => {
    if (companyFrameRef.current) {
      const { offsetTop, offsetHeight } = companyFrameRef.current;
      window.scrollTo({
        top: offsetTop + offsetHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div ref={companyFrameRef} className={style.main}>
      <div className={style.texts}>
        <h1>TechShop</h1>
        <p>
          "Join the <span style={{ color: '#F45E0C' }}>digital revolution</span>"
        </p>
        <button onClick={handleExploreClick} className={style.explorebutton}>
          Explore More
        </button>
      </div>
      <img draggable="false" className={style.laptopphoto} src={laptopPhoto} alt="laptopphoto" />
    </div>
  );
};

export default CompanyFrame;
