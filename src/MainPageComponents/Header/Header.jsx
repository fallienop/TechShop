import React, { useState, useEffect, useRef } from 'react';
import style from './Header.module.css';
import logo from '../../Images/Header/logo.svg';
import bag from '../../Images/Header/bag.svg';
import search from '../../Images/Header/search-normal.svg';
import user from '../../Images/Header/user.svg';
import { NavLink } from 'react-router-dom';
import ProductModal from './Modals/ProductModal/ProductModal';

const getActiveClass = (isActive) => {
  return isActive ? 'active' : '';
};

const getApplyActiveStyle = (isActive) => {
  return isActive ? { color: 'blue' } : {};
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
              exact='true'
              style={(isActive) => getApplyActiveStyle(isActive)}
              className={(isActive) => getActiveClass(isActive)}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
            onMouseOver={() => toggleModal(true)}
              onMouseOut={() => toggleModal(false)}
              onMouseEnter={() => toggleModal(true)}
              className={(isActive) => getActiveClass(isActive)}
              to="/products"
            >
              Products
            </NavLink>
            <NavLink className={(isActive) => getActiveClass(isActive)} to="/Blog">
              Blog
            </NavLink>
            <NavLink className={(isActive) => getActiveClass(isActive)} to="/modal">
              FAQ
            </NavLink>
            <NavLink className={(isActive) => getActiveClass(isActive)} to="/Contact">
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
