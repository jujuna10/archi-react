import React from 'react'
import { useTranslation } from 'react-i18next'
import phone from '../assets/phone1.png'
import phone2 from '../assets/phone2.png'
import message from '../assets/message.png'



export default function Contact() {
    const { t } = useTranslation();
  return (
    <div className='flex flex-col items-center'>
        <div className='w-[90%]  flex flex-col gap-[50px] p-[50px]'>
            <h1>{t("contacttitle")}</h1>
            <div className=' flex justify-between'>
                <h1 className='text-[25px] font-semibold'>{t("link8")}</h1>
                <div className='flex justify-center items-center gap-[35px]'>
                    <div className='flex justify-center items-center gap-[35px]'>
                        <img src={phone} alt="phone" className='w-[32px] rounded-[50%]' />
                        <p>+995 322 602 602</p>
                    </div>

                    <div className='flex justify-center items-center gap-[35px]'>
                        <img src={phone2} alt="phone" className='w-[32px] rounded-[50%]' />
                        <p>+995 322 602 602</p>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-4 gap-[20px]'>
                {t("offices", { returnObjects: true }).map((item, index) => (
                    <div key={index} className='flex flex-col gap-[20px] bg-[rgb(234,241,247)] p-[25px] rounded-tr-[50px] duration-500 rounded-bl-[50px] hover:border-[1px] hover:border-blue-400'>
                        <p className='text-blue-700'>{item}</p>
                        <p className='teext-[20px] font-semibold'>{t(`officesaddres.${index}`)}</p>
                        <p>{t("worktime")}</p>
                        <div className='flex justify-between'>
                            <div>
                                <p>{t("days")}</p>
                                <p>09:30-18:30</p>
                            </div>

                            <div>
                                <p>{t("days2")}</p>
                                <p>11:00-16:00</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[20px]'>
                            <div className='flex gap-[20px]'>
                                <img src={phone} alt="phone" className='w-[25px] rounded-[50%]' />
                                <p>+995 322 602 602</p>
                            </div>

                            <div className='flex gap-[20px]'>
                                <img src={message} alt="phone" className='w-[25px] rounded-[50%]' />
                                <p>info@archi.ge</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    </div>
  )
}
