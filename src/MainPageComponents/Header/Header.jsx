import React, { useState, useEffect, useRef } from 'react';
import style from './Header.module.css';
import logo from '../../Images/Header/logo.svg';
import bag from '../../Images/Header/bag.svg';
import search from '../../Images/Header/search-normal.svg';
import user from '../../Images/Header/user.svg';
import { NavLink } from 'react-router-dom';
import ProductModal from './Modals/ProductModal/ProductModal';
import SearchModal from './Modals/SearchModal/SearchModal';

const isMobile = window.innerWidth < 768;
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
       
        clearTimeout(modalTimeoutRef.current);
        document.body.children[1].children[1].classList.add('blurryBackground');


        setModal(show);
      }
    } else {
      document.body.children[1].children[1].classList.remove('blurryBackground');

    
      modalTimeoutRef.current = setTimeout(() => {
        setModal('');
      }, 70);
    }
  };

  useEffect(() => {
    return () => {
  
      clearTimeout(modalTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        
        setModal('');
        setSearchModalBool(!searchModalBool)
        document.body.children[1].children[1].classList.remove('blurryBackground');
      }
    };

    //
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  return (
    <header>
      <div className={style.header}>
        <img draggable="false" src={logo} className={style.logo} alt="logo" />

        <div className={style.routes}>
        <ul className={style.navlinks}>
  <NavLink
    exact='true'
    style={(isActive) => getApplyActiveStyle(isActive, '/')}
    aria-hidden="true"
    className={`${getActiveClass('/', '')} ${style.navlink}`}
    to="/"
  >
    Home
  </NavLink>

  <NavLink
    to="/products"
    onMouseOver={() => toggleModal('product')}
    onMouseOut={() => toggleModal('')}
    onMouseEnter={() => toggleModal('product')}
    className={`${getActiveClass('/')} ${style.navlink}`}
    style={(isActive) => getApplyActiveStyle(isActive, '/products')}
  >
    Products
  </NavLink>

{
  !isMobile&&(<NavLink
    to="/Blog"
    style={(isActive) => getApplyActiveStyle(isActive, '/Blog')}
    className={`${getActiveClass('/')} ${style.navlink}`}
  >
    Blog
  </NavLink>)
}
  
{!isMobile&&(  <NavLink
    to="/modal"
    className={`${getActiveClass('/')} ${style.navlink}`}
    style={(isActive) => getApplyActiveStyle(isActive, '/modal')}
  >
    FAQ
  </NavLink>)}

  {!isMobile&&(   <NavLink
    to="/productdetails"
    className={`${getActiveClass('/')} ${style.navlink}`}
    style={(isActive) => getApplyActiveStyle(isActive, '/Contact')}
  >
    Contact Us
  </NavLink>)}
 
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
      {(modal == 'product'&&!isMobile) && (
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
