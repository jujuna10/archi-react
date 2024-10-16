import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from './context/DataContext';
import { CompanyContext } from './context/ArchiCardData';
import c1 from '../assets/c1.png';
import l1 from '../assets/l1.png';
import l2 from '../assets/l2.png';
import l3 from '../assets/l3.png';
import l4 from '../assets/l4.png';
import l5 from '../assets/l5.png';
import l6 from '../assets/l6.png';
import l7 from '../assets/l7.png';
import l8 from '../assets/l8.png';
import l9 from '../assets/l9.png';
import l10 from '../assets/l10.png';
import l11 from '../assets/l11.png';
import l12 from '../assets/l12.png';
import l13 from '../assets/l13.png';
import l14 from '../assets/l14.png';
import l15 from '../assets/l15.png';
import l16 from '../assets/l16.png';
import l17 from '../assets/l17.png';
import l18 from '../assets/l18.png';
import l19 from '../assets/l19.png';
import l20 from '../assets/l20.png';
import l21 from '../assets/l21.png';
import l22 from '../assets/l22.png';
import l23 from '../assets/l23.png';
import l24 from '../assets/l24.png';
import l25 from '../assets/l25.png';
import l26 from '../assets/l26.png';
import l27 from '../assets/l27.png';
import l28 from '../assets/l28.png';
import l29 from '../assets/l29.png';
import l30 from '../assets/l30.png';
import l31 from '../assets/l31.png';
import l32 from '../assets/l32.png';
import l33 from '../assets/l33.png';
import l34 from '../assets/l34.png';
import l35 from '../assets/l35.png';
import l36 from '../assets/l36.png';
import l37 from '../assets/l37.png';
import l38 from '../assets/l38.png';
import l39 from '../assets/l39.png';
import l40 from '../assets/l40.png';
import l41 from '../assets/l41.png';
import l42 from '../assets/l42.png';
import l43 from '../assets/l43.png';
import l44 from '../assets/l44.png';
import l45 from '../assets/l45.png';
import l46 from '../assets/l46.png';
import l47 from '../assets/l47.png';
import l48 from '../assets/l48.png';

export default function ArchiCard() {
    const { t } = useTranslation();
    const { language } = useContext(LanguageContext);
    const { companyKa, companyEng } = useContext(CompanyContext)
    const [selected,setSelected] = useState(null)
    const companiesLogo = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16, l17, l18, l19, l20, l21, l22, l23, l24, l25, l26, l27, l28, l29, l30, l31, l32, l33, l34, l35, l36, l37, l38, l39, l40, l41, l42, l43, l44, l45, l46, l47, l48];
    const companies = language === "ka" ? companyKa : companyEng

    const handleClick = (category) => {
        setSelected(category)
        setSelected(category === "ყველა" ? null : category === "All" ? null : category)
        // setSelected(category === "All" ? null : category)

    }

    const filteredCompanies = selected 
        ? companies.filter(company => company.category === selected)
        : companies


    return (
        <div className='flex flex-col justify-center items-center bg-[rgb(234,241,247)] p-[50px] rounded-tr-[200px]'>
            <div className='w-[80%] flex flex-col gap-[50px] p-[50px]'>
                <h1>{t("cardsection")}</h1>
                <div className='flex justify-between'>
                    <h1 className='text-[25px] font-semibold'>{t("cardtitle")}</h1>
                </div>
                <div className='flex flex-col justify-center items-center gap-[20px]'>
                    <img src={c1} alt="photo" className='w-[100%] rounded-tr-[50px] rounded-bl-[50px]' />
                    <p className='m-[10px] w-[1290px] text-slate-600 text-[20px]'>{t("cardtext2")}</p>
                </div>

                <div className='flex gap-[50px]'>
                    {t("search", { returnObjects: true }).map((item,index) => (
                        <p key={index} className='text-slate-500 hover:cursor-pointer hover:text-blue-700 duration-200\' onClick={() => handleClick(item)}>{item}</p>
                    ))}
                </div>

                <div className='text-center'>
                    <div className='grid grid-cols-6 gap-[35px]'>
                        {filteredCompanies.length ? (
                            filteredCompanies.map((item, index) => (
                                <div key={index} className='flex flex-col gap-[10px] justify-center items-start relative'>
                                    <img src={companiesLogo[index]} alt='photo' className='w-[225px] h-[200px] rounded-[10px] rounded-tr-[50px]' />
                                    <p className='text-blue-700'>#{item.category}</p>
                                    <p className='text-[20px] font-bold'>{item.name}</p>
                                    <p className='absolute top-[-10px] left-[35px] bg-[rgb(110,127,202)] p-[10px] w-[95px] rounded-bl-[20px] rounded-br-[20px] text-white font-bold font-[20px]'>{item.discount}</p>
                                </div>
                            ))
                        ) : (
                            <p>no companies</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
