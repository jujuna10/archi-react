import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import p1 from '../assets/partner1.png';
import p2 from '../assets/partner2.png';
import p3 from '../assets/partner3.png';
import p4 from '../assets/partner4.png';
import arrow from '../assets/down-arrow.png'


export default function Partners() {
    const { t } = useTranslation();
    const images = [p1, p2, p3, p4]

    const initialState = images.map(() => ({ more: false }))
    const [partnersState, setPartnersState] = useState(initialState)

    const handleMore = (index) => {
        const updatedState = partnersState.map((partner, i) => 
            i === index ? { ...partner, more: !partner.more } : partner
        )
        setPartnersState(updatedState)
    };

    return (
        <div className='mt-[50px] bg-[rgb(234,241,247)] p-[20px]'>
            <div className='flex justify-around'>
                <div className='flex flex-col gap-[100px]'>
                    <p>{t("info2")}</p>
                    <h1 className='text-[25px] font-semibold'>{t("pagetitle")}</h1>
                </div>
                <p>{t("partners")}</p>
            </div>

            <div className='flex flex-wrap flex-col items-center gap-[20px] mt-[50px]'>
                {images.map((item, index) => (
                    <div key={index} className='w-[80%] p-[20px] bg-white flex justify-around rounded-tr-[50px] rounded-bl-[50px]'>
                        <img src={item} alt={`partner-${index}`} className='w-[290px] h-[290px] translate-x-[-35px] rounded-tr-[50px] rounded-bl-[50px]' />
                        <div className='text-center mt-[10px] w-[1000px] flex flex-col items-start gap-[20px]'>
                            <p className='text-[20px] font-bold'>{t(`partnersname.${index}`)}</p>
                            <p className='text-[20px]'>{t(`position.${index}`)}</p>
                            <p className={`overflow-hidden text-left transition-all duration-700 ${partnersState[index].more ? 'max-h-[500px]' : 'max-h-[75px]'}`}>{t(`history.${index}`)}</p>
                            <div className=' flex gap-[10px]'>
                                <button className='text-blue-700' onClick={() => handleMore(index)}>{t("herobutton")}</button> 
                                <img src={arrow} alt="arrow" className={`w-[15px] duration-700 ${partnersState[index].more ? 'rotate-180' : ""}`} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
