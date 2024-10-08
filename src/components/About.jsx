import React from 'react'
import { useTranslation } from 'react-i18next'
import about from '../assets/about.png'


export default function About() {
    const { t } = useTranslation();

  return (
    <div className='overflow-hidden h-[1090px]'>
        <div>
            <h1 className='text-[25px] font-bold text-center'>{t("about")}</h1>
        </div>

        <div className='translate-x-[39%] translate-y-[100%]'>
            <img src={about} alt="about" className='w-[450px] rounded-[50%]' />
        </div>

        <div className='translate-x-[25%] translate-y-[-75%]'>
            <div className="w-[270px] h-[270px] rounded-full border border-blue-700 text-center hover:scale-[1.1] duration-200 hover:cursor-pointer flex justify-center items-center">
                <p className='text-blue-400 text-[20px] font-semibold w-[150px]'>{t("completedproject")}</p>
            </div>
        </div>

        <div className='translate-x-[20%] translate-y-[-20%]'>
            <div className="w-[270px] h-[270px] rounded-full border border-blue-700 text-center hover:scale-[1.1] duration-200 hover:cursor-pointer flex justify-center items-center">
                <p className='text-blue-400 text-[20px] font-semibold w-[150px]'>{t("experience")}</p>
            </div>
        </div>

        <div className='translate-x-[39%] translate-y-[-50%]'>
            <div className="w-[270px] h-[270px] rounded-full border border-blue-700 text-center hover:scale-[1.1] duration-200 hover:cursor-pointer flex justify-center items-center">
                <p className='text-blue-400 text-[20px] font-semibold w-[150px]'>{t("ongoing")}</p>
            </div>
        </div>

        <div className='translate-x-[62%] translate-y-[-150%]'>
            <div className="w-[270px] h-[270px] rounded-full border border-blue-700 text-center hover:scale-[1.1] duration-200 hover:cursor-pointer flex justify-center items-center">
                <p className='text-blue-400 text-[20px] font-semibold w-[150px]'>{t("ongoingconscruting")}</p>
            </div>
        </div>

        <div className='translate-x-[70%] translate-y-[-400%]'>
            <div className="w-[270px] h-[270px] rounded-full border border-blue-700 text-center hover:scale-[1.1] duration-200 hover:cursor-pointer flex justify-center items-center">
                <p className='text-blue-400 text-[20px] font-semibold w-[150px]'>{t("completed")}</p>
            </div>
        </div>

        <div className='translate-x-[50%] translate-y-[-600%]'>
            <div className="w-[270px] h-[270px] rounded-full border border-blue-700 text-center hover:scale-[1.1] duration-200 hover:cursor-pointer flex justify-center items-center">
                <p className='text-blue-400 text-[20px] font-semibold w-[150px]'>{t("district")}</p>
            </div>
        </div>

    </div>
  )
}
