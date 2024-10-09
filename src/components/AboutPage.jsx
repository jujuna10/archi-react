import React from 'react'
import { useTranslation } from 'react-i18next'
import photo from '../assets/aboutpage.png'



export default function AboutPage() {
    const { t } = useTranslation();

  return (
    <div className='flex flex-col gap-[50px] mt-[50px]'>
        <div className='bg-[rgb(234,241,247)] p-[20px] flex flex-col justify-center items-center gap-[50px] rounded-tr-[200px]'>
            <div className='ml-[20%]'>
                <p className='mb-[50px]'>{t("info")}</p>
                <h1 className='text-[25px] font-semibold'>{t("aboutcompany")}</h1>
                <img src={photo} alt="photo" className='w-[80%] h-[600px] rounded-tr-[50px] rounded-bl-[50px]' />
            </div>

            <div className='w-[1100px] flex flex-col gap-[25px]'>
                <p className='text-[20px] text-gray-700'>{t("abouttext1")}</p>
                <p className='text-[20px] text-gray-700'>{t("abouttext2")}</p>
                <p className='text-[20px] text-gray-700'>{t("abouttext3")}</p>
                <p className='text-[20px] text-gray-700'>{t("abouttext4")}</p>
                <p className='text-[20px] text-gray-700'>{t("abouttext5")}</p>

            </div>
        </div>
    </div>
  )
}
