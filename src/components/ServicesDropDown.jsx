import React, {useContext} from 'react'
import { LanguageContext } from './context/DataContext'
import { Link } from 'react-router-dom';


export default function ServicesDropDown({ isOpen2, onMouseEnter2, onMouseLeave2 }) {
    const { language } = useContext(LanguageContext);


    const geo = ["არქი ქარდი", "არქი ფიქსი", "არქი რენთი"];
    const eng = ["Archi Card", "Archi Fix", "Archi Rent"];


  return (
    isOpen2 && (
        <div className='absolute top-[68px] left-[1070px] border border-gray-400 pt-[20px] pb-[20px] p-[10px] bg-white rounded-[10px] z-50 transition-opacity duration-300' onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>        
            {language === "ka" ?
            geo.map((item,index) => (
                <Link to={index === 0 ? '/about' : index === 1 ? '/fix' : '/rent'} key={index}>
                        <p>{item}</p>
                </Link>

            )) : eng.map((item,index) => (
                <Link to={index === 0 ? '/about' : index === 1 ? '/fix' : '/rent'} key={index}>
                        <p>{item}</p>
                </Link>
            ))}
        
    </div>
    
    )
    
  )
}
