import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next'
import phone from '../assets/phone1.png'
import r1 from '../assets/r1.png'





export default function ArqiRent() {
    const { t } = useTranslation();
    
    return (
        <div className='flex flex-col justify-center items-center bg-[rgb(234,241,247)] p-[50px] rounded-tr-[200px]'>
            <div className='w-[80%] flex flex-col gap-[50px] p-[50px]'>
                <h1>{t("rentsection")}</h1>
                <div className=' flex justify-between'>
                    <h1 className='text-[25px] font-semibold'>{t("renttitle")}</h1>
                    <div className='flex justify-center items-center gap-[35px]'>
                        <div className='flex justify-center items-center gap-[35px]'>
                            <img src={phone} alt="phone" className='w-[32px] rounded-[50%]' />
                            <p>+995 322 602 602</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center gap-[20px]'>
                    <img src={r1} alt="photo" className='w-[100%] rounded-tr-[50px] rounded-bl-[50px]' />
                    {t("renttext", { returnObjects: true }).map((item,index) => (
                        <p className='m-[10px] w-[1290px] text-slate-600 text-[20px]'>{item}</p>
                    ))}

                </div>
            </div>

        </div>
  )
}
