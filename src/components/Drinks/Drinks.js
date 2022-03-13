import React,{useEffect, useState, useContext} from 'react';
import {GET_ALL_COCKTAILS} from '../../config/config'
import { AllContetxt, UserContext } from '../../UserContext';
import './Drinks.css'
import {FaShoppingCart} from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function Drinks() {

  const {all, setAll} = useContext(AllContetxt)
  const {info,setInfo} = useContext(UserContext)
  const [data, setData] = useState()
  
  useEffect(()=>{
    let token = localStorage.getItem('token')
    console.log(all);
    console.log(token);
    token ? setInfo(true): setInfo(false)
  },[all])
  const render = async ()=>{
    const req = await fetch(GET_ALL_COCKTAILS)
    const res = await req.json()
    const result = res.drinks.slice(0,12)
    // console.log(result);
    setData(result)
  }

  useEffect(()=>{
    render()
  },[])
  console.log(data);
  let price = 400
      
  
    AOS.init({
      odset:100,
      duration:1000,
      easing:'ease',
      once:true,
    })
  
  return <div className="allitem">
    <div className='container'>
    <div className="row">
      {data && data.map((el,i)=>{
        return (
          <div key={i} className='box' data-aos="fade-up"
          data-aos-anchor-placement="top-center">
            <h1>{el.strDrink}</h1>
            <img src={el.strDrinkThumb} alt="" />
            <p>Price: {price} <FaShoppingCart/></p>
          </div>
        )
      })}
    </div>
  </div>;
  </div>
}
