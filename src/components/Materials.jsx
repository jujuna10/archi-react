import React from 'react'
import { useTranslation } from 'react-i18next'
import material1 from '../assets/material1.png'
import material2 from '../assets/material2.png'
import material3 from '../assets/material3.png'
import material4 from '../assets/material4.png'
import material5 from '../assets/material5.png'
import material6 from '../assets/material6.png'
import material7 from '../assets/material7.png'





export default function Materials() {
    const { t } = useTranslation();
    const materials = [material1,material2,material3,material4,material5,material6,material7]
  return (
    <div  className='flex flex-col items-center bg-[rgb(234,241,247)] rounded-tr-[200px] mt-[100px]'> 
        <div className='w-[90%]  flex flex-col gap-[50px] p-[50px]'>
            <p>{t("materialssection")}</p>
            <p className='text-[25px] font-semibold'>{t("materials")}</p>
            <div>
                {materials.map((item,index) => (
                    <div className='flex gap-[50px]'>
                        <img src={item} alt="material" className='w-[900px] border-[5px] border-blue-800 rounded-tr-[50px] rounded-bl-[50px] mb-[50px]' />
                        <div className='flex flex-col gap-[25px]'>
                            <p className='text-[29px] font-semibold'>{t(`allmaterialname.${index}`)}</p>
                            <p className='w-[700px] text-slate-600'>{t(`allmaterialsdescription.${index}`)}</p>
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    </div>
  )
}
