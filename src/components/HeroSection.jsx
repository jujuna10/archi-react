import React, { useContext } from 'react';
import Slider from "react-slick";
import { useTranslation } from 'react-i18next'
import { LanguageContext } from './context/DataContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/alia.png'
import img2 from '../assets/alia-1.jpg'
import img4 from '../assets/arqi1.jpg'
import img5 from '../assets/arqi2.jpg'



export default function HeroSection() {
    const imagesOfHero = [img1,img2,img4,img5]
    const { t } = useTranslation();
    const { language } = useContext(LanguageContext);


    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };
    return (
        <div className='w-full overflow-hidden'>
        <Slider {...settings}>
            {imagesOfHero.map((item,index) => (
                <div key={index} className='w-full relative'>
                    <img src={item} alt="photo" className='w-full h-[800px]'/>
                    <p className='absolute top-[200px] left-[100px] text-white text-[70px] bg-[rgba(10,10,10,0.53)] p-[10px] rounded-[20px]'>{t(`herotext.${index}`) }</p>
                    <button className='absolute top-[390px] left-[100px] text-white text-[20px] p-[10px] rounded-[35px] w-[120px] duration-200 border-black  hover:bg-[rgba(10,10,10,0.57)] hover:border-white border-[1px]'>{t("herobutton")}</button>
                </div>
            ))}
        </Slider>
        </div>
    );
}

