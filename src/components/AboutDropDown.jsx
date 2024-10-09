import React, {useContext} from 'react'
import { LanguageContext } from './context/DataContext'
import { Link } from 'react-router-dom';


export default function AboutDropDown({ isOpen, onMouseEnter, onMouseLeave }) {
    const { language } = useContext(LanguageContext);


    const geo = ["კომპანიის შესახებ","მენეჯმენტის გუნდი","სოციალური პასუხისმგებლობა"]
    const eng = ["About the Company", "Management Team", "Social Responsibility"];

  return (
    isOpen && (
        <div className='absolute top-[68px] left-[290px] border border-gray-400 pt-[20px] pb-[20px] p-[10px] bg-white rounded-[10px] z-50 transition-opacity duration-300' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>        
            {language === "ka" ?
            geo.map((item,index) => (
                index === 0 ? (
                    <Link to='/about'><p key={index} value={item}>{item}</p></Link>
                ) : index === 1 ? <Link to='/partners' key={index}><p>{item}</p></Link> :
                <p>{item}</p>

            )) : eng.map((item,index) => (
                index === 0 ? (
                    <Link to='/about'><p key={index} value={item}>{item}</p></Link>
                ) : index === 1 ? <Link to='/partners' key={index}><p>{item}</p></Link> :
                <p>{item}</p>
            ))}
        
    </div>
    
    )
    
  )
}
