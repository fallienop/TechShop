import React,{useState,useEffect} from 'react';
import { useMediaQuery } from 'react-responsive';
import style from './Featured.module.css';
import ip15 from '../../Images/Featured/iphone15.png';
import ps5 from '../../Images/Featured/ps5.png';
import { Link } from 'react-router-dom';
const leftUpperOrange = () => (
  <svg className={style.leftUpperOrangeSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 102" fill="none">
    <style>
      {`
        .${style.leftUpperOrangeSvg} {
          width: 7.64vw;
          height: 7.08vw;
        }

        @media (max-width: 768px) {
          .${style.leftUpperOrangeSvg} {
            width: 42.825vw;
            height: 39.53vw;
          }
        }
      `}
    </style>
    <path d="M110 0C110 13.3948 107.142 26.6585 101.589 39.0337C96.0355 51.4089 87.8962 62.6533 77.6353 72.1249C67.3744 81.5965 55.193 89.1097 41.7865 94.2357C28.38 99.3617 14.0111 102 -0.500008 102L-0.5 0H110Z" fill="#FCC870" />
  </svg>
);

const bottomOrange = () => (
  <svg className={style.bottomOrangeSvg} viewBox="0 0 444 261" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      {`
        .${style.bottomOrangeSvg} {
          width: 30.83vw;
          height: 18.125vw;
        }

        @media (max-width: 768px) {
          .${style.bottomOrangeSvg} {
            width: 114.17vw;
            height: 52.2vw;
          }
        }
      `}
    </style>
    <ellipse cx="222" cy="160" rx="283" ry="160" fill="#FCC870" />
  </svg>
);

const Featured = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const targetDate = new Date('December 31, 2023 23:59:59');

    const calculateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    const countdownInterval = setInterval(calculateCountdown, 1000);

    calculateCountdown(); 

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className={style.main}>
      <div className={style.ip15}>
        <div className={style.imageandtitle}>
          <p className={style.phonename}>IPhone <span style={{ color: 'white' }}>15 Series</span></p>
          <img className={style.ip15img} src={ip15} alt="iphone15" />
        </div>
        <div className={style.countdownandabout}>
          <div className={style.countdown}>
          <div className={style.counts}>{countdown.days} day</div>
        <div className={style.counts}>{countdown.hours} hour</div>
            {isMobile ? (
              <>
                <div className={style.counts}>{countdown.minutes} min</div>
        <div className={style.counts}>{countdown.seconds} sec</div>
              </>
            ) : (
              <>
                 <div className={style.counts}>{countdown.minutes} minute</div>
        <div className={style.counts}>{countdown.seconds} second</div>
              </>
            )}
          </div>
          <p className={style.aboutTitle}>It feels good to be the first</p>
          <p className={style.about}>Get ready for the future of smartphones. Experience innovation like never before. Stay tuned for the big iPhone 15 pre-sale.</p>
          <Link  to={`/productdetails/phone/1`}> <button className={style.registerbutton}>Shop Now</button></Link>
        </div>
      </div>
      <div className={style.ps5}>
        <p className={style.ps5title}> Play Station 5</p>
        <div className={style.leftupperorange}>
          {leftUpperOrange()}
        </div>
        <p className={style.ps5spec}>Digital Edition + 2TB</p>
        <div className={style.bottomorange}>
          {bottomOrange()}
        </div>
        <img src={ps5} className={style.ps5image} alt="playstation5" />
        < Link  to={`/productdetails/gaming/1`}>
        <button className={style.registerToPs5}>Buy Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Featured;
