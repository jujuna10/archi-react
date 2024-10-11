import React from 'react'
import { useTranslation } from 'react-i18next'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpeg'
import p4 from '../assets/p4.jpeg'
import p5 from '../assets/p5.jpg'
import p6 from '../assets/p6.jpg'
import p7 from '../assets/p7.jpg'
import p8 from '../assets/p8.jpg'
import p9 from '../assets/p9.jpg'




export default function Project() {
  const { t } = useTranslation();

  const photos = [p1, p2, p3, p4, p5, p6, p7, p8, p9]

  return (
    <div className='max-w-[1000px] '>
        <div className='flex'>
          {photos.map((item,index) => (
            <div key={index} style={{ marginTop: index !== 0 ? `-${index * 20}px` : "0" }}>
              <img src={item} alt="photo" className='w-[400px] h-[450px]' />
            </div>
          ))}
        </div>
    </div>
  )
}
