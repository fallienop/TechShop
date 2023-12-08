import React from 'react'
import style from './Header.module.css'
import logo from '../Images/Header/logo.svg'
import bag from '../Images/Header/bag.svg'
import search from '../Images/Header/search-normal.svg'
import user from '../Images/Header/user.svg'
import { NavLink } from 'react-router-dom'

const getActiveClass=(isActive )=>{
  return isActive?  "active":"";
}
const getApplyActiveStyle = (isActive) => {
  return isActive ? { color: "blue" } : {};
};

const Header = () => {

  return (
    <div className={style.header}>
  
      <img src={logo} className={style.logo} alt="logo"/>

      <div className={style.routes}>
        <ul>
            <NavLink exact style={(isActive) => getApplyActiveStyle(isActive)}   className={(isActive)=>getActiveClass(isActive)} to="/">Home</NavLink>
            <NavLink   className={(isActive)=>getActiveClass(isActive)} to="/Products">Products</NavLink>
            <NavLink  className={(isActive)=>getActiveClass(isActive)} to="/Blog">Blog</NavLink>
            <NavLink className={(isActive)=>getActiveClass(isActive)} to="/Faq">FAQ</NavLink>
            <NavLink  className={(isActive)=>getActiveClass(isActive)} to="/Contact">Contact Us</NavLink>      
        </ul>        
      </div>

      <div className={style.headerButtons}>
        <img src={search} alt="search"/>
        <img src={bag} alt="bag"/>
        <img src={user} alt="user"/>
      </div>

    </div>

  
  )
}

export default Header