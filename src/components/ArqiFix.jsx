import React, { useContext, useState } from 'react';
import { LanguageContext } from './context/DataContext'
import { useTranslation } from 'react-i18next'
import af1 from '../assets/af1.png'
import af2 from '../assets/af2.png'
import af3 from '../assets/af3.png'
import af4 from '../assets/af4.png'
import af5 from '../assets/af5.png'
import af6 from '../assets/af6.png'
import phone from '../assets/phone1.png'





export default function ArqiFix() {
    const { t } = useTranslation();
    const { language } = useContext(LanguageContext);
    const images = [af2, af3, af4, af5, af6]
    const geo = ["სანტექნიკა", "ელექტრობა", "უნივერსალური სამუშაოები", "გათბობა-კონდიცირება", "კარ-ფანჯარა და საკეტები", "სარემონტო სამუშაოები"];
    const eng = ["Plumbing", "Electrical", "General Works", "Heating and Cooling", "Doors, Windows, and Locks", "Renovation Works"];





  return (
    <div className='flex flex-col justify-center items-center bg-[rgb(234,241,247)] p-[50px] rounded-tr-[200px]'>
        <div className='w-[80%] flex flex-col gap-[50px] p-[50px]'>
            <h1>{t("fixsection")}</h1>
            <div className=' flex justify-between'>
                <h1 className='text-[25px] font-semibold'>{t("fixtitle")}</h1>
                <div className='flex justify-center items-center gap-[35px]'>
                    <div className='flex justify-center items-center gap-[35px]'>
                        <img src={phone} alt="phone" className='w-[32px] rounded-[50%]' />
                        <p>+995 322 602 602</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center'>
                <img src={af1} alt="photo" className='w-[90%] rounded-tr-[50px] rounded-bl-[50px]' />
                <div className='flex flex-col items-center'>
                    {t("fixtext", { returnObjects: true }).map((item,index) => (
                        <div key={index}>
                            <p className='m-[10px] w-[1000px] text-slate-600 text-[20px]'>{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex gap-[20px] justify-center items-center flex-wrap'>
                {images.map((item, index) => (
                    <div key={index} className='flex flex-col gap-[10px] justify-center items-center'>
                        <img src={item} alt="photo" className='w-[220px] h-[220px] rounded-tr-[50px] rounded-bl-[50px]' />
                        <p className='text-center w-[220px]'>{language === "ka" ? geo[index] : eng[index]}</p>
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}
