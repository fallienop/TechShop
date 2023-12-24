import React from 'react'
import style from './CompanyPromises.module.css'
import first from '../../Images/CompanyPromises/first.svg'
import second from '../../Images/CompanyPromises/second.svg'
import third from '../../Images/CompanyPromises/third.svg'
import fourth from '../../Images/CompanyPromises/fourth.svg'

const returndiv = (image, alt, p, width) => {
  const styles = {
    width: width,
    height: 'auto',
  };

  const isMobile = window.innerWidth < 768;

  if (isMobile) {

    styles.width = parseFloat(styles.width) * 2.5 + 'vw';

  }

  return (
    <div className={style.promise}>
      <img
        style={styles}
        className={style.promiseImage}
        src={image}
        alt={alt}
      />
      <p className={style.promiseText}>{p}</p>
    </div>
  );
};



const CompanyPromises = () => {
  return (
    <div className={style.main}>


      {returndiv(first, 'first', 'Latest and Greatest Tech', '2.78vw')}
      {returndiv(second, 'second', 'Guarantee', '2.78vw')}
      {returndiv(third, 'third', 'Free Shipping over 1000$', '4.3vw')}
      {returndiv(fourth, 'fourth', '24/7 Support', '2.78vw')}

    </div>
  )
}

export default CompanyPromises