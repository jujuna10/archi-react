import React, { useContext, useState } from 'react';
import { ReviwesContext } from './context/ReviewsData';
import { useTranslation } from 'react-i18next'
import arrow from '../assets/arrow.png'

export default function Reviews() {
  const { images, names, reviews } = useContext(ReviwesContext)
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t } = useTranslation()

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1) % images.length)
  }
  return (
    <div className='bg-[#eaf1f7]'>
      <div className='flex justify-end m-[20px] gap-[20px]'>
          <img src={arrow} alt="prev" onClick={prevSlide} className='rotate-180 w-[50px] hover:scale-[1.1] duration-200' />
          <img src={arrow} alt="next" onClick={nextSlide} className='w-[50px] hover:scale-[1.1] duration-200' />
      </div>
        
      <div className='flex flex-col items-center'>
        <div className='flex w-[1320px] overflow-hidden'>
          {images.map((item, index) => (
            <div className='flex-shrink-0 justify-center items-center duration-700 p-[10px]'  style={{ transform: `translateX(-${currentSlide * 100}%)` }} key={index}>
              <div className='bg-white flex flex-col items-center p-[35px] hover:scale-[1.1] hover:m-[2px] duration-700'>
                <img src={item} alt="people" className='w-[350px] h-[350px]  rounded-tr-[50px] rounded-bl-[50px] ' />
                <p className='text-center m-[20px] font-bold'>{t(`names.${index}`)}</p>
                <p className='w-[300px] text-center'>"{t(`reviu.${index}`)}"</p>

              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  )
}
