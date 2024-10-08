import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next'
import { LanguageContext } from './context/DataContext'
import ii from '../assets/ii.png'
import iiii from '../assets/ll.png'
import ll from '../assets/kk.png'
import llll from '../assets/jj.png'

export default function Payment() {
    const { t } = useTranslation();
    const { changeLanguage } = useContext(LanguageContext);
  return (
    <div className='mt-[20px]'>
        <h1 className='text-center text-[35px] m-[20px]'>{t("payment")}</h1>
        <div className='flex justify-center items-center gap-[35px]'>
            <div className='w-[400px] h-[400px] rounded-[50%] border-[rgb(228,146,231)] border-[1px] flex items-center justify-center'>
                <div className='flex flex-col items-center w-[250px] text-[20px] h-[200px]'>
                    <img src={ll} alt="payment" className='w-[50px]' />
                    <hr className='w-[290px] m-[20px] h-[3px] bg-[rgb(228,146,231)]' />
                    <p>{t("payment1")}</p>

                </div>
            </div>

            <div className='w-[400px] h-[400px] rounded-[50%] border-[rgb(228,146,231)] border-[1px] flex items-center justify-center'>
                <div className='flex flex-col items-center justify-center w-[250px] text-[20px] h-[400px]'>
                    <img src={ii} alt="payment" className='w-[50px]' />
                    <hr className='w-[290px] m-[20px] h-[3px] bg-[rgb(228,146,231)]' />
                    <p>{t("payment2")}</p>

                </div>
            </div>

            <div className='w-[400px] h-[400px] rounded-[50%] border-[rgb(228,146,231)] border-[1px] flex items-center justify-center'>
                <div className='flex flex-col items-center justify-center w-[250px] text-[20px] h-[400px]'>
                    <img src={iiii} alt="payment" className='w-[50px]' />
                    <hr className='w-[290px] m-[20px] h-[3px] bg-[rgb(228,146,231)]' />
                    <p>{t("payment3")}</p>

                </div>
            </div>

            <div className='w-[400px] h-[400px] rounded-[50%] border-[rgb(228,146,231)] border-[1px] flex items-center justify-center'>
                <div className='flex flex-col items-center justify-center w-[250px] text-[20px] h-[400px]'>
                    <img src={llll} alt="payment" className='w-[50px]' />
                    <hr className='w-[290px] m-[20px] h-[3px] bg-[rgb(228,146,231)]' />
                    <p>{t("payment4")}</p>

                </div>
            </div>

            
        </div>
    </div>
  )
}
