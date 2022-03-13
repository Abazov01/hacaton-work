import React, { useState, useEffect, useContext } from 'react';
import "./Header.css"
import { NavLink } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'
import {FaShoppingCart} from 'react-icons/fa'
import { AllContetxt, UserContext } from '../../UserContext';

export default function Header({setShow, countCartItems}) {
    
    const {info, setInfo } = useContext(UserContext)
    const {all, setAll} = useContext(AllContetxt)
    const [burger, setBurger] = useState(false)
    const toggleBurger = () => {
        setBurger(!burger)
    }
    
    
    
 useEffect(()=>{
    AOS.init({
      odset:100,
      duration:1000,
      easing:'ease',
      once:true,
    })
  })

  let res
  const name = localStorage.getItem('name')
  if(name){
    const user = name.slice(0,1)
    res = user.toUpperCase()
  }
  let add
  const email = localStorage.getItem('email')
  if(email){
      add = email
  }

  const infa = ()=>{
      alert('Ваше имя: '+ name)
      alert('Ваш имейл: '+ add)
  }
  const clearStorage = ()=>{
        setAll(!all)
        // console.log(all);
        localStorage.clear()
        // localStorage.removeItem('token')
        // localStorage.removeItem('name')
        // localStorage.removeItem('eamil')
  }

    return (
        
            <div className="header" data-aos='fade-down-left' >
                <div onClick={()=>setShow(true)} className="basket">
                <FaShoppingCart size='100%' color='d0a88b'/>
                {' '}

                    {countCartItems ? (
                        <button className="badge">{countCartItems}</button>
                    ) : (
                        ' '
                    )}
                </div>{' '}
                <div className="container">
                        <div className="menu__nav">
                            <div className='nav__icon'>
                                <img src="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/sites/2/2020/07/t_christopher%E2%80%99s.png" alt="" />
                            </div>

                            <ul className={`nav ${burger ? 'show-nav' : ''}`}>
                                <li onClick={toggleBurger}>
                                    <NavLink to={'/hacaton-work/homepage'}>Блюда</NavLink>
                                </li >

                                <li onClick={toggleBurger}>
                                    <NavLink to={'/hacaton-work/drinks'}>Напитки</NavLink>
                                </li>
                                <li onClick={toggleBurger}>
                                    <NavLink to={'/hacaton-work/desserts'}>Дессерты</NavLink>
                                </li>
                                <li onClick={toggleBurger}>
                                    <NavLink to={'/hacaton-work/about'}>О нас</NavLink>
                                </li >
                                <li onClick={toggleBurger} className={` ${info ? 'none' : 'button' }`}>
                                    <NavLink to={'/hacaton-work/login'}>Войти</NavLink>
                                </li>
                                <li onClick={()=>infa()} className={` ${info ? 'flex  ' : 'none' }`}>
                                    <button  className='avatar'>{res}</button>
                                </li>
                                <li onClick={()=>clearStorage()} className={` ${info ? 'flex  ' : 'none' }`}>
                                    <button  className="logout">Logout</button>
                                </li>
                                

                            </ul>

                            

                            {/* <div className="backet">
                                <MdShoppingCart />
                            </div> */}
                           
                            <div onClick={toggleBurger} className={`mobile-btn ${burger ? 'show-mobile-btn' : ''}`}>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
        
    );
}