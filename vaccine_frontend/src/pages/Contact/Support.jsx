import React from 'react'
import {FaEnvelope} from "react-icons/fa"
import GetInTouch from './GetInTouch'

const supports = [
    {title: "APP USER SUPPORT", subtitle: "For all support for app users contact:",email:"support@vaccinereminder.com"},
    {title: "PRIVACY POLICY QUESTIONS", subtitle: "For all questions related to our privacy policy contact:",email:"support@vaccinereminder.com"},
    {title: "HEALTH CARE PROFFESIONAL SUPPORT", subtitle: "Contact us via email on:",email:"support@vaccinereminder.com"},
    {title: "FACEBOOK MESSENGER SUPPORT", subtitle: "Contact us on facebook messanger",email:"Facebook Messanger"},
    {title: "GENERAL BSSINESS QUESTIONS", subtitle: "For all bussiness, contact our team at:",email:"support@vaccinereminder.com"},
]

const Support = () => {
  return (
    <section className="w-full px-8 md:px-12 py-10 flex flex-col justify-center items-center">
        <h2 className="text-green-800 mb-2 text-center w-full">ALL SUPPORT QUERIES</h2>
        <p className="w-full lg:w-2/3 text-center text-neutral-600 py-4">The vaccine reminder offer unsurpassed support for our app. If you have any enquiries please do not hesitate to contact on the details below</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-8 items-center ">
            {supports.map(support=>(
                <SupportCard 
                    title={support.title}
                    subtitle={support.subtitle}
                    email={support.email}
                />
            ))}
        </div>
        <GetInTouch />
    </section>
  )
}

export default Support

const SupportCard = ({title, subtitle, email}) => {
  return (
    <div>
        <h4 className="text-green-800">{title}</h4>
        <p className="text-sm text-neutral-600">{subtitle}</p>
        <div className="flex items-center ">
            <span className="text-green-400">
                <FaEnvelope />
            </span>
            <p className="ml-2 text-sm text-green-800">{email}</p>
        </div>
    </div>
  )
}
