
import React,{useEffect, useContext} from 'react';
import { AllContetxt, UserContext } from '../../UserContext';
import './Dessert.css'
import { BsBasketFill } from 'react-icons/bs'
import { BsStarFill } from 'react-icons/bs'
import { BsStarHalf } from 'react-icons/bs'

export default function Desserts() {

    const arr={url:[
        {image:'https://3pulse.com/uploads/images/00/00/02/2013/08/26/58b53f.jpg', name:'Чуррос (Испания)', price: 250, id:'1a'},
        {image:'https://3pulse.com/uploads/images/00/00/02/2013/08/26/99bf72.jpg', name:'Тирамису (Италия)', price:250, id:'1b'},
        {image:'https://3pulse.com/uploads/images/00/00/02/2013/08/26/df0e01.jpg', name:'Торт Павлова (Австралия)', price:250, id:'1c'},
        {image:'https://3pulse.com/uploads/images/00/00/02/2013/08/26/5a58cf.jpg', name:'Пахлава (Турция)', price:250, id:'1d'},
        {image:'https://3pulse.com/uploads/images/00/00/02/2013/08/26/04f70f.jpg', name:'Пудинг «Замок» (Англия)', price:250, id:'1e'},
      ]}

    console.log(arr.url);  

    const {all, setAll} = useContext(AllContetxt)
    const {info,setInfo} = useContext(UserContext)
    
    useEffect(()=>{
      let token = localStorage.getItem('token')
      // console.log(all);
      // console.log(token);
      token ? setInfo(true): setInfo(false)
    },[all])
    
    return (
            <div className="dessert">
              <div className="container">
                <div className='row'>
               
                    {arr.url && arr.url.map((el) => {
                        return(                            
                            <div key={el.id} className="col-3">
                
                                <div className="image">
                                    <img src={el.image} alt="" />
                                </div>
                        
                                <div className="info">
                                <h3>{el.name}</h3>

                                <ul className='rating'>
                                    <li><BsStarFill /></li>
                                    <li><BsStarFill /></li>
                                    <li><BsStarFill /></li>
                                    <li><BsStarFill /></li>
                                    <li><BsStarHalf /></li>
                                </ul>
                                <div className='info_price'>
                                    <span className="price">{el.price} coм</span>
                                    <button className='add-to-card'><BsBasketFill /></button>
                                </div>

                                </div>
                        </div>
                        )
                    })}
                    
                </div>  
            </div>
            </div>   
                            
             
        
    )
}
