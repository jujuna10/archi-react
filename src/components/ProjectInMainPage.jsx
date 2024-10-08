import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next'
import { LanguageContext } from './context/DataContext'
import saburtalo from '../assets/saburtalo.jpg'
import varketili from '../assets/varketili.jpg'
import axmeteli from '../assets/axmeteli.jpg'
import arvici from '../assets/arvici.jpg'
import arvici2 from '../assets/arvici2.jpg'

import corps1 from '../assets/corps1.jpg'
import corps2 from '../assets/corps2.jpg'
import corps3 from '../assets/corps3.jpg'
import corps4 from '../assets/corps4.jpg'
import corps5 from '../assets/corps5.jpg'
import mark from '../assets/mark.png'




export default function ProjectInMainPage() {
    const { t } = useTranslation();
    const { language } = useContext(LanguageContext);
    const [index,setIndex] = useState(0)

    const handleClick = (e) => {
        e.preventDefault()
        if(index >= corps.length - 1){
            setIndex(0)
        } else {
            setIndex((prev) => prev + 1)
        }
        
    }
    
    const corps = [saburtalo,varketili,axmeteli,arvici,arvici2]

    const corpsSecond = [corps1,corps2,corps3,corps4,corps5]
    return (
        <div className='flex gap-[100px] items-center'>
            <div className='ml-[90px] bg-[rgb(234,241,247)] w-[1000px] p-[10px] rounded-tr-[50px] '>
                <h1 className='text-[25px]'>{t("projecttitle")}</h1>
                <div>
                    <div className='flex gap-[200px] items-center'>
                        <div className='flex flex-col gap-[50px] items-center'>
                            <p>{t(`corps.${index}`)}</p>
                            <div className='flex gap-[20px] w-[200px]'>
                                <img src={mark} alt="mark" className='w-[25px] h-[35px]' />
                                <p>{t(`addres.${index}`)}</p>  
                            </div>
                            <button className='w-[120px] p-[10px] rounded-[20px] border-gray hover:text-white hover:bg-[rgb(66,59,59)] hover:border-white border-[1px] transition-colors duration-300' onClick={handleClick}>{t("corpsbutton")}</button>
                        </div>
                        <div className='relative'>
                            <img src={corps[index]} alt="corps image" className='w-[500px] rounded-tr-[50px] h-[700px] opacity-[0.8]' />
                            <button className='absolute top-[50%] left-[42%] text-white border-white p-[10px] rounded-[20px] hover:bg-[rgb(158,129,129)] w-[100px] hover:border-black duration-200 border-[1px]'>{t("herobutton")}</button>
                            
                        </div>
                    </div>

                    
                </div>
            </div>
            <div className='relative'>
                <img src={corpsSecond[index]} alt="corps" className='w-[600px] h-[600px] rounded-tr-[50px] rounded-bl-[50px] opacity-[0.8]' />
                <p className='absolute top-[120px] left-[50px] text-white text-[35px] font-bold'>{t(`nameproject.${index}`)}</p>
                <div>
                    <img src={mark} alt="mark" className='w-[20px] absolute top-[200px] left-[50px]' />
                    <p className='absolute top-[200px] left-[80px] text-white font-bold'>{t(`projectaddres.${index}`)}</p>

                </div>
            </div>
        </div>
    )
}
