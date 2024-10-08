import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import arrow from '../assets/arrow.png';

import g1 from '../assets/g1.png';
import g2 from '../assets/g2.png';
import g3 from '../assets/g3.png';
import g4 from '../assets/g4.png';
import g5 from '../assets/g5.png';
import g6 from '../assets/g6.png';
import g7 from '../assets/g7.png';

export default function Gallery() {
    const { t } = useTranslation();
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [g1, g2, g3, g4, g5, g6, g7]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length)
    };
    
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
    };

    return (
        <div className='bg-[#eaf1f7] mb-[50px] p-[50px]'>
            <div className='flex justify-end m-[20px] gap-[20px]'>
                <img src={arrow} alt="prev" onClick={prevSlide} className='rotate-180 w-[50px] hover:scale-[1.1] duration-200 mt-[20px]' />
                <img src={arrow} alt="next" onClick={nextSlide} className='w-[50px] hover:scale-[1.1] duration-200 mt-[20px]' />
            </div>
            <h1 className='ml-[295px] mb-[20px] text-[25px]'>{t("gallery")}</h1>
            <div className='flex flex-col items-center'>
                <div className='flex w-[1320px] overflow-hidden'>
                    {images.map((item, index) => (
                        <div 
                            className='flex-shrink-0 justify-center items-center duration-700 p-[10px]' 
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }} 
                            key={index}
                        >
                            <div 
                                className={`flex flex-col items-center p-[35px] duration-1000 transform ${index === currentSlide ? 'scale-125' : 'scale-100'}`}
                            >
                                <img 
                                    src={item} 
                                    alt={`Gallery Image ${index}`} 
                                    className='w-[350px] h-[350px] rounded-tr-[50px] rounded-bl-[50px]' 
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
