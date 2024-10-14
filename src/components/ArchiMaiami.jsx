import React from 'react';
import { useTranslation } from 'react-i18next';
import maiam1 from '../assets/maiami1.png';
import maiam2 from '../assets/maiami2.png';
import maiam3 from '../assets/maiami3.png';
import maiam4 from '../assets/maiami4.png';
import maiam5 from '../assets/maiami5.png';
import maiam6 from '../assets/maiami6.png';
// import maiam7 from '../assets/maiami7.png';

export default function ArchiMaiami() {
    const { t } = useTranslation();
    const imagesArray = [maiam1, maiam2, maiam3, maiam4, maiam5, maiam6];

    return (
        <div className='flex flex-col justify-center items-center'>
            {imagesArray.map((item, index) => (
                <div key={index} className='flex flex-col justify-center items-center'>
                    <img src={item} alt="photo" className='w-[80%] rounded-tr-[50px] rounded-bl-[50px]' />
                    <p className='w-[1200px] m-[50px] text-[20px] text-slate-600'>{t(`maiamitext.${index}`)}</p>
                </div>
            ))}
        </div>
    )
}
