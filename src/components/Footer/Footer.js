import React from 'react';
import './Footer.css'
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import {MdOutlineFacebook} from 'react-icons/md'

export default function Footer() {
    return (
        <div className='container footer'>
            <div className="footer__all">

                <div className="footer__all_title">
                <img id='title' src="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/sites/2/2020/07/t_christopher%E2%80%99s.png" alt="" />
                
                </div>

                <div className="footer__all_social">

                    <p id='social'>Вы можете найти нас в социальных сетях</p>

                    <div className="media">
                        <div className="a">
                        <a href="https://www.facebook.com/"> 
                            <MdOutlineFacebook size='100%' color='black'/>
                        </a>
                        </div>

                        <div className="a">
                        <a href="https://www.instagram.com/">
                            <AiFillInstagram size='100%' color='black'/>
                        </a>
                        </div>

                        <div className="a">
                        <a href="https://twitter.com/">
                            <AiFillTwitterCircle size='100%' color='black'/>
                        </a>
                        </div>
                    </div>
                </div>

                <div className="footer__all_contacts">

                    <div className="contacts">
                        <title>КОНТАКТЫ</title>
                        <p>г.Бишкек, Кыргызстан</p>
                        <p>ул.Фрунзе, 26</p>
                        <p>E-mail: christophers@gmail.com</p>
                        <p>Телефон +996 312 664 466</p>

                    </div>
                    
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.6190954208914!2d74.59774971485157!3d42.880883210044466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7bdc064c05b%3A0x82646b720de62566!2z0YPQu9C40YbQsCDQpNGA0YPQvdC30LUsINCR0LjRiNC60LXQug!5e0!3m2!1sru!2skg!4v1643444539421!5m2!1sru!2skg"allowFullScreen loading="lazy"></iframe>
                    </div>

                </div>

            </div>

        </div>

        
    )
}
