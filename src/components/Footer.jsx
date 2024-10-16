import React from 'react'
import logo from '../assets/archi.jpg'
import fb from '../assets/facebook.png'
import insta from '../assets/instagram.png'
import iinn from '../assets/linkedin-big-logo.png'
import youtube from '../assets/youtube.png'
import tiktok from '../assets/tik-tok.png'
import { useTranslation } from 'react-i18next'



export default function Footer() {
    const { t } = useTranslation();

  return (
    <div>
        <div className='flex justify-around items-center'>
            <div>
                <img src={logo} alt="logo" className='w-[100px]' />
            </div>

            <div className='flex flex-col'>
              <div className='flex gap-[20px]'>
                <img src={fb} alt="fb" className='h-[35px] ' />
                <img src={insta} alt="insta"  className='h-[35px]' />
                <img src={iinn} alt="iinn"  className='h-[35px]' />
                <img src={youtube} alt="youtube"   className='h-[35px]' />
                <img src={tiktok} alt="tiktok"  className='h-[35px]' />
              </div>

              <div className='grid grid-cols-4 gap-[20px] mt-[20px]'>
                {t("footertext", { returnObjects: true }).map((item,index) => (
                  <p className='hover:cursor-pointer'>{item}</p>
                ))}
              </div>
            </div>
            
        </div>
        <hr className='w-[90%] h-[2px] ml-[4%] mt-[20px] bg-black' />
        <p className='ml-[10%] mt-[20px]'>Copyright © 2022</p>

    </div>
  )
}
