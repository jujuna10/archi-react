import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next'
import { LanguageContext } from './context/DataContext'
import logo from '../assets/archi.jpg'
import arrow from '../assets/down-arrow.png'
import { Link } from 'react-router-dom';
import AboutDropDown from './AboutDropDown';


const Header = () => {
  const { t } = useTranslation();
  const [open,setOpen] = useState(false)
  const { changeLanguage } = useContext(LanguageContext);

  const handleMouseEnter = () => {
    setOpen(true);
  }

  const handleMouseLeave = () => {
    setOpen(false);
  }


  return (
    <div className='flex justify-evenly items-center'>
        <Link to='/'><img src={logo} alt="archi logo" className='w-[90px]'/></Link>
        <div className='flex gap-[25px]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        >
            <div className='flex gap-[10px]'>
              <p className='hover:text-blue-700 hover:cursor-pointer duration-200'>{t("link1")}</p>
              <img src={arrow} alt="arrow" className={`w-[15px] ${open ? "rotate-180" : ""} duration-700
              `} />
            </div>
            <Link to='/project'><p className='hover:text-blue-700 hover:cursor-pointer duration-200'>{t("link2")}</p></Link>
            <p className='hover:text-blue-700 hover:cursor-pointer duration-200'>{t("link3")}</p>
            <p className='hover:text-blue-700 hover:cursor-pointer duration-200'>{t("link4")}</p>
            <p className='hover:text-blue-700 hover:cursor-pointer duration-200'>{t("link5")}</p>
            <p className='hover:text-blue-700 hover:cursor-pointer duration-200'>{t("link6")}</p>
            <p className='hover:text-blue-700 hover:cursor-pointer duration-200'>{t("link7")}</p>
            <p className='hover:text-blue-700 hover:cursor-pointer duration-200'>{t("link8")}</p>
        </div>

        <div className='flex items-center gap-[20px]'>
            <button onClick={() => changeLanguage('en')} className='w-[120px] bg-[rgb(240,237,237)] opacity-[0.8] rounded-[10px] h-[35px] hover:bg-black hover:text-white duration-200'>English</button>
            <button onClick={() => changeLanguage('ka')} className='w-[120px] bg-[rgb(240,237,237)] opacity-[0.8] rounded-[10px] h-[35px] hover:bg-black hover:text-white duration-200'>ქართული</button>
        </div>

        <AboutDropDown isOpen={open} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
    </div>
  );
};

export default Header;
