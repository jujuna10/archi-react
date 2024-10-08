import React,{useContext} from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageContext } from './context/DataContext'
import { InputsContext } from './context/InputData';



export default function Reservation() {
    const { t } = useTranslation();
    const { language } = useContext(LanguageContext);
    const { data, setData } = useContext(InputsContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setData({
            name: e.target.name.value,
            phone: e.target.phone.value,
            country: e.target.country.value,
            purchace: e.target.purchace.value,
            office: e.target.office.value,
        })

        e.target.name.value = ""
        e.target.phone.value = ""
        


    }

    const countries = ["country", "Georgia", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Republic of the", "Congo, Democratic Republic of the", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France"];
    const countries2 = ["ქვეყანა","საქართველო","აფგანისტანი","ალბანეთი","ალჟირი","ანდორა","ანგოლა","არგენტინა","არმენია","ავსტრალია","ავსტრია","აზერბაიჯანი","ბაჰამები","ბაჰრეინი","ბანგლადეში","ბარბადოსი","ბელარუსი","ბელგია","ბელიზი","ბენინი","ბუტანი","ბოლივია","ბოსნია და ჰერცეგოვინა","ბოტსვანა","ბრაზილია","ბრუნეი","ბულგარეთი","ბურგუნდა","ბურუნდია","კაბო ვერდე","კამბოჯა","კამერუნი","კანადა","ცენტრალური აფრიკის რესპუბლიკა","ჩადი","ჩილი","ჩინეთი","კოლუმბია","კომორო","კონგო, რესპუბლიკა","კონგო, დემოკრატიული რესპუბლიკა","კოსტა რიკა","ხორვატია","კუბა","კიპრი","ჩეხეთის რესპუბლიკა","დანია","ჯიბუტი","დომინიკა","დომინიკანური რესპუბლიკა","ეკვადორი","ეგვიპტე","ელ სალვადორი","საწვავის თანამდებობა","ერიტრეა","ესტონია","ესვატინი","ეთიოპია","ფიჯი","ფინეთი","ფრანგეთი"]

    const purchace = ["Purchace an apartament","Other"]
    const purchace2 = ["ბინის შეძენა","სხვა"]

    const office = ["Any office","Office and gallery","Tamarashvili office","Isani Home office","Gldani Home office"]
    const office2 = ["ნებისმიერი ოფისი", "ოფისი და გალერეა", "თამარაშვილის ოფისი", "ისნის საოფისე სახლი", "გლდანის საოფისე სახლი"];

  return (
    <div className='flex justify-center items-center'>
        <div className='w-[90%] bg-[rgb(236,243,249)] flex flex-col justify-center items-center mt-[5x] rounded-tl-[50px] rounded-br-[50px]'>
            <h1 className='text-[32px] font-bold text-center text-[rgb(54,50,50)]'>{t("call")}</h1>
            <p className='text-[rgb(54,50,50)]'>{t("contact")}</p>
        <div className='mb-[50px]'>
            <form className='grid grid-cols-3 gap-[20px] mt-[20px]' onSubmit={handleSubmit}>
                <input type="text" name="name" id="" className='w-[400px] h-[50px] rounded-[20px] p-[10px] border-[1px] border-blue-700' placeholder={t("name")} />
                <input type="text" name="phone" id="" className='border-[1px] w-[400px] h-[50px] rounded-[20px] p-[10px] border-blue-700' placeholder={t("phone")} />
                <select name="country" className='border-[1px] w-[400px] h-[50px] rounded-[20px] p-[10px] border-blue-700'>
                    { language === "ka" ? countries2.map((item,index) => (
                        <option key={index} value={item}>{item}</option>
                    )) : (countries.map((item,index) => (
                        <option key={index} value={item}>{item}</option>
                    )))}
                </select>

                <select name="purchace" className='border-[1px] w-[400px] h-[50px] rounded-[20px] p-[10px] border-blue-700'>
                    { language === "ka" ? purchace2.map((item,index) => (
                        <option key={index} value={item}>{item}</option>
                    )) : (purchace.map((item,index) => (
                        <option key={index} value={item}>{item}</option>
                    )))}
                </select>

                <select name="office" className='border-[1px] w-[400px] h-[50px] rounded-[20px] p-[10px] border-blue-700'>
                    { language === "ka" ? office2.map((item,index) => (
                        <option key={index} value={item}>{item}</option>
                    )) : (office.map((item,index) => (
                        <option key={index} value={item}>{item}</option>
                    )))}
                </select>
                <button type='submit' className='bg-[rgb(35,140,205)] rounded-[20px] text-white'>{t("requestcall")}</button>

            </form>

            <p className='w-[500px] translate-x-[80%] mt-[20px] text-[15px]'>{t("terms")}</p>
        </div>
        </div>
        
    </div>
  )
}
