import React, { useState, useEffect, useRef } from 'react';
import style from './Header.module.css';
import logo from '../../Images/Header/logo.svg';
import bag from '../../Images/Header/bag.svg';
import search from '../../Images/Header/search-normal.svg';
import user from '../../Images/Header/user.svg';
import { NavLink } from 'react-router-dom';
import ProductModal from './Modals/ProductModal/ProductModal';
import SearchModal from './Modals/SearchModal/SearchModal';

const getActiveClass = (isActive, path) => {
  return isActive && window.location.pathname === path ? 'active' : '';
};
const getApplyActiveStyle = (isActive, path) => {
  return isActive && window.location.pathname === path ? { color: 'blue' } : {};
};

const Header = () => {
  const overlayRef = useRef(null);
  const [modal, setModal] = useState('');
  const [searchModalBool, setSearchModalBool] = useState(true);
  const modalTimeoutRef = useRef(null);

  const toggleModal = (show) => {
    if (show != '') {
      if ((show == 'search' && searchModalBool) || show == 'product') {
        // Cancel any existing timeout
        clearTimeout(modalTimeoutRef.current);
        document.body.children[1].children[1].classList.add('blurryBackground');


        setModal(show);
      }
    } else {
      document.body.children[1].children[1].classList.remove('blurryBackground');

      // Set a timeout before hiding the modal
      modalTimeoutRef.current = setTimeout(() => {
        setModal('');
      }, 70);
    }
  };

  useEffect(() => {
    return () => {
      // Clear the timeout when the component is unmounted
      clearTimeout(modalTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        // If there's a click outside the modal's children, close the modal
        setModal('');
        setSearchModalBool(!searchModalBool)
        document.body.children[1].children[1].classList.remove('blurryBackground');
      }
    };

    // Attach an event listener for click
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      // Clean up the event listener
      document.removeEventListener('mousedown', handleOutsideClick);
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
              onMouseOver={() => toggleModal('product')} onMouseOut={() => toggleModal('')}
              onMouseEnter={() => toggleModal('product')}
              className={(isActive) => getActiveClass(isActive, '/products')}
              style={(isActive) => getApplyActiveStyle(isActive, '/products')}
            >
              Products
            </NavLink>

            <NavLink to="/Blog" className={(isActive) => getActiveClass(isActive, '/Blog')} style={(isActive) => getApplyActiveStyle(isActive, '/Blog')}>
              Blog
            </NavLink>

            <NavLink to="/modal" className={(isActive) => getActiveClass(isActive, '/modal')} style={(isActive) => getApplyActiveStyle(isActive, '/modal')}>
              FAQ
            </NavLink>

            <NavLink to="/productdetails" className={(isActive) => getActiveClass(isActive, '/Contact')} style={(isActive) => getApplyActiveStyle(isActive, '/Contact')}>
              Contact Us
            </NavLink>

          </ul>
        </div>

        <div className={style.headerButtons}>

          <div className={style.headerButton} onClick={() => {
            toggleModal('search');
            setSearchModalBool(!searchModalBool)
          }}><img src={search} alt="search" />
          </div>
          <div className={style.headerButton}>
            <img src={bag} alt="bag" />
          </div>
          <div className={style.headerButton}> <img src={user} alt="user" /> </div>
        </div>
      </div>
      {modal == 'product' && (
        <div onMouseOver={() => toggleModal('product')} onMouseOut={() => toggleModal('')}
          onMouseEnter={() => toggleModal('product')}>  <ProductModal /></div>

      )}

      {modal == 'search' && (
        <div ref={overlayRef}>
          <div className="overlay"></div> {/* This is the dimmed overlay */}
          <SearchModal />
        </div>

      )}
    </header>
  );
};

export default Header;
