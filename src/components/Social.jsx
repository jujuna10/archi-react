import React from 'react'
import { useTranslation } from 'react-i18next'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import s4 from '../assets/s4.png'



export default function Social() {

    const { t } = useTranslation();
    const images = [s1,s2,s3,s4]

  return (
    <div className='bg-[rgb(234,241,247)] p-[50px]'>
        <div className='flex flex-col gap-[20px] ml-[10%]'>
            <p>{t("pagetitle2")}</p>
            <p className='text-[25px] font-semibold'>{t("moretitle")}</p>
            <p className='w-[1100px]'>{t("sectiontext")}</p>
        </div>

        <div className='flex gap-[20px] justify-center items-center mt-[50px]'>
          {images.map((item,index) => (
            <div className='flex flex-col items-center gap-[20px]'>
              <img src={item} alt="photo" className='w-[290px]' />
              <p className='text-[20px] w-[290px] text-center'>{t(`phototext.${index}`)}</p>
            </div>
          ))}
        </div>


    </div>
  )
}
