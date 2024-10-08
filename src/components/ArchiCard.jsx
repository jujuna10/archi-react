import React from 'react'
import { useTranslation } from 'react-i18next'
import card from '../assets/archicard.png'


export default function ArchiCard() {
    const { t } = useTranslation();

  return (
    <div className='bg-[rgb(180,220,246)]'>
        <div className='flex gap-[500px]'>
            <div className='w-[590px] h-[500px] bg-white translate-y-[-100px] border-[1px] border-blue-700 translate-x-[50px] rounded-tl-[50px] rounded-br-[50px] flex justify-center flex-col pl-[50px] gap-[50px]'>
                <h1 className='text-[25px] font-bold'>{t("archicard")}</h1>
                <p className='w-[500px]'>{t("cardtext")}</p>
                <button className=' w-[200px] h-[50px] m-[35px] translate-x-[120%] text-white rounded-[50px] bg-[rgb(212,14,125)] hover:bg-[rgb(204,34,150)] duration-200'>{t("seesondition")}</button>
            </div>
            <img src={card} alt="card" className='w-[400px] h-[400px]' />
        </div>
    </div>
  )
}
