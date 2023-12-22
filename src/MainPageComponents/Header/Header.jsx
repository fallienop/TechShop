import React, { useState, useEffect, useRef } from 'react';
import style from './Header.module.css';
import logo from '../../Images/Header/logo.svg';
import bag from '../../Images/Header/bag.svg';
import search from '../../Images/Header/search-normal.svg';
import user from '../../Images/Header/user.svg';
import { NavLink } from 'react-router-dom';
import ProductModal from './Modals/ProductModal/ProductModal';

const getActiveClass = (isActive, path) => {
  return isActive && window.location.pathname === path ? 'active' : '';
};

const getApplyActiveStyle = (isActive, path) => {
  return isActive && window.location.pathname === path ? { color: 'blue' } : {};
};

const Header = () => {
  const [modal, setModal] = useState(false);
  const modalTimeoutRef = useRef(null);

  const toggleModal = (show) => {
    if (show) {
      // Cancel any existing timeout
      clearTimeout(modalTimeoutRef.current);
      document.body.children[1].children[1].classList.add('blurryBackground');
      
      
      setModal(true);
    } else {
      document.body.children[1].children[1].classList.remove('blurryBackground');

      // Set a timeout before hiding the modal
      modalTimeoutRef.current = setTimeout(() => {
        setModal(false);
      }, 70);  
    }
  };

  useEffect(() => {
    return () => {
      // Clear the timeout when the component is unmounted
      clearTimeout(modalTimeoutRef.current);
    };
  }, []);

  return (
    <header>
      <div className={style.header}>
        <img draggable="false" src={logo} className={style.logo} alt="logo" />

        <div className={style.routes}>
          <ul>
          <NavLink
  exact="true"  // <- Leave this for the root path only
  style={(isActive) => getApplyActiveStyle(isActive, '/')} 
  aria-hidden="true"
  className={(isActive) => getActiveClass(isActive, '/')} 
  to="/"
>
  Home
</NavLink>

<NavLink
  to="/products"  
  onMouseOver={() => toggleModal(true)}
  onMouseOut={() => toggleModal(false)}
  onMouseEnter={() => toggleModal(true)}
  className={(isActive) => getActiveClass(isActive, '/products')} 
  style={(isActive) => getApplyActiveStyle(isActive, '/products')}
>
  Products
</NavLink>

<NavLink to="/Blog"   className={(isActive) => getActiveClass(isActive, '/Blog')} style={(isActive) => getApplyActiveStyle(isActive, '/Blog')}>
  Blog
</NavLink>

<NavLink to="/modal" className={(isActive) => getActiveClass(isActive, '/modal')} style={(isActive) => getApplyActiveStyle(isActive, '/modal')}>
  FAQ
</NavLink>

<NavLink to="/Contact" className={(isActive) => getActiveClass(isActive, '/Contact')} style={(isActive) => getApplyActiveStyle(isActive, '/Contact')}>
  Contact Us
</NavLink>

          </ul>
        </div>

        <div className={style.headerButtons}>
          <img src={search} alt="search" />
          <img src={bag} alt="bag" />
          <img src={user} alt="user" />
        </div>
      </div>
      {modal && (
        <div  onMouseOver={() => toggleModal(true)} onMouseOut={() => toggleModal(false)}
        onMouseEnter={() => toggleModal(true)}>  <ProductModal  /></div>
       
      )}
    </header>
  );
};

export default Header;
