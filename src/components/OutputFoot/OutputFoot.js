import React,{useEffect} from 'react';
import "./OutputFood.css"
import { BsBasketFill } from 'react-icons/bs'
import { BsStarFill } from 'react-icons/bs'
import { BsStarHalf } from 'react-icons/bs'
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function OutputFood(props) {
  const arr=[
    {image:'https://img.fresh.ru/unsafe/1200x900/https%3A%2F%2Fimg.fresh.ru%2Ffresh-article-20210816%2F905-c74a429016fe5ddd91bb9804b0d7e17811046450.jpg'},
    {image:'https://i.pinimg.com/564x/ef/a4/33/efa43331ea45a0d69e4381af66331643.jpg'},
    {image:'https://img1.liveinternet.ru/images/attach/c/11/117/550/117550799_luchshie_blyuda_italyanskoy_kuhni_4.jpg'},
    {image:'https://www.tvtomsk.ru/uploads/images/2021/12/03/2d5974e05d521e.jpg'},
    {image:'https://expertitaly.ru/wp-content/uploads/2017/07/Fetuchini-s-gribami-retsept-prigotovleniya-italyanskogo-blyuda-360x200.jpg'},
    {image:'http://sak-voyag.ru/wp-content/uploads/2014/02/pizza.jpg'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTltB-gIZ9XddbNjApzaxASudXSOl6io-_rfQ&usqp=CAU'},
    {image:'https://i.obozrevatel.com/2019/1/31/screenshot26.png?size=1944x924'},
    {image:'https://www.kamis-pripravy.ru/upload/medialibrary/190/1901f321a6ff97b4304d53c3c4a614f3.jpg'},
    {image:'https://media-cdn.tripadvisor.com/media/photo-s/16/90/89/72/photo0jpg.jpg'},
    {image:'https://fs.tonkosti.ru/35/9b/359b2flhx5wkgo8ws8wg4cos0.jpg'},
  ]
  
    AOS.init({
      odset:100,
      duration:1000,
      easing:'ease',
      once:true,
    })
  
  return (
    <div className="back">
    <div className='container '>

      <div className='row'>

        {
         props.data.map((el,index) => {

            return (
              <div key={index} className="col-3" data-aos="fade-up"
              data-aos-anchor-placement="top-center">
                <div className="product">
                  <div className="image">
                    <img src={arr[index].image} alt="" />
                  </div>
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
                    <button onClick={() => props.onAdd(el)} className='add-to-card'><BsBasketFill /></button>
                  </div>

                </div>
              </div>
            )
          })

        }


      </div>
    </div>
    </div>



  )

}