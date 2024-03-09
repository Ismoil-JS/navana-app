import React from 'react'
import c from './About.module.scss'
import flag from '../../images/flag.png'

const About = () => {
    return (
        <div id='about' className={c.about_container}>
            <h2><img src={flag} className={c.flag_toogle} alt="flag" /> BIZ <span style={{ color: "rgb(119, 230, 243)" }}>HAQIMIZDA</span> <img src={flag} alt="flag" /></h2>
            <div className={c.about_content}>
                <p className={c.about_content_left}>
                    HLB Motors - Ommabop elektromobillarni O'zbekistonga olib kirish va sotishga ixtisoslashgan dinamik avto salon. Ushbu kompaniya O'zbekistonning avtomobil bozorida mashhur BYD brendining innovatsion va ekologik toza avtomobillarini taklif qilib kelmoqda. Toshkent shahrida strategik jihatdan joylashgan ushbu kompaniya mahalliy mijozlarga BYD avtomobillarining ilg'or texnologiyasi va sifatli mahoratini taqdim etadi. To'g'ridan-to'g'ri Xitoydan import qilish orqali ular har bir avtomobilning elektr harakatlanishdagi so'nggi yutuqlari va innovatsiyalarini o'zida mujassamlashtirganini ta'minlaydi, bu BYD ning barqarorlik va ishlashga sodiqligini aks ettiradi.
                </p>
                <p className={c.about_content_right}>
                    Toshkentning qoq markazida joylashgan ushbu kompaniya BYD ishqibozlari va yuqori darajadagi avtomobil yechimlarini izlayotgan atrof-muhitga e'tiborli haydovchilar uchun markaz bo'lib xizmat qiladi. Eng soʻnggi texnologik xususiyatlarni oʻzida mujassam etgan va xilma-xil modellarni taklif etuvchi yuqori sifatli avtomobillar bilan taʼminlashga eʼtibor qaratgan holda, ular Oʻzbekiston avtomobil bozorining turli afzalliklarini qondirishga qaratilgan. BYD ning global mukammalligini mahalliy foydalanish imkoniyati bilan uyg'unlashtirgan holda, ushbu kompaniya Toshkentdagi avtomobil landshaftini shakllantirishda muhim rol o'ynaydi, O'zbekistonning aqlli iste'molchilariga zamonaviy, ekologik toza haydash tajribasini taqdim etadi.
                </p>
                <a href="/#">Asosiy</a>
            </div>
        </div>
    )
}

export default About