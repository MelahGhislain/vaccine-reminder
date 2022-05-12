import React from 'react'
import CustomHero from '../../components/CustomHero'
import NavBar from '../../components/NavBar'
import {images} from "../../constants"
import Footer from '../../components/Footer'
import VaccineList from './VaccineList'
const vaccines = [
    {
        name: "BCG",
        contact: "first contact",
        age: "At birth",
        route_of_admin: "Intrademal",
        preventable_diseases: ["Tuberculosis"]
    },
    {
        name: "OPV 0",
        contact: "first contact",
        age: "At birth",
        route_of_admin: "Oral",
        preventable_diseases: ["Poliomyelitis"]
    },
    {
        name: "DTP-HepB-Hib 1",
        contact: "second contact",
        age: "6 weeks",
        route_of_admin: "Intramoscular",
        preventable_diseases: ["Diphteria", "Tetanus", "Pertussis", "Infection due to Haemophilus Influnzae type b", "Hepatitis B Poliomyelitis"]
    },
    {
        name: "OPV 1",
        contact: "second contact",
        age: "6 weeks",
        route_of_admin: "Oral",
        preventable_diseases: ["Poliomyelitis"]
    },
    {
        name: "Pneumo 13-1 (PCV)",
        contact: "second contact",
        age: "6 weeks",
        route_of_admin: "Intramoscular",
        preventable_diseases: ["Pneumococcal infections"]
    },
    {
        name: "ROTAL 1",
        contact: "second contact",
        age: "6 weeks",
        route_of_admin: "Oral",
        preventable_diseases: ["RotaVirus Diarrhoea"]
    },
    {
        name: "DTP-HepB-Hib 2",
        contact: "third contact",
        age: "10 weeks",
        route_of_admin: "Intramoscular",
        preventable_diseases: ["Diphteria", "Tetanus", "Pertussis", "Infection due to Haemophilus Influnzae type b", "Hepatitis B"]
    },
            
    // 3 contact

    {
        name: "OPV 2",
        contact: "third contact",
        age: "10 weeks",
        route_of_admin: "Oral",
        preventable_diseases: ["Poliomyelitis"]
    },
    {
        name: "Pneumo 13-2",
        contact: "third contact",
        age: "10 weeks",
        route_of_admin: "Intramoscular",
        preventable_diseases: ["Pneumococcal infections"]
    },
    {
        name: "ROTAL 2",
        contact: "third contact",
        age: "10 weeks",
        route_of_admin: "Oral",
        preventable_diseases: ["RotaVirus Diarrhoea"]
    },
    {
        name: "DTP-HepB-Hib 3",
        contact: "third contact",
        age: "10 weeks",
        route_of_admin: "Intramoscular",
        preventable_diseases: ["Diphteria", "Tetanus", "Pertussis", "Infection due to Haemophilus Influnzae type b", "Hepatitis B"]
    },
    {
        name: "OPV 3",
        contact: "third contact",
        age: "10 weeks",
        route_of_admin: "Oral",
        preventable_diseases: ["Poliomyelitis"]
    },
    {
        name: "IPV",
        contact: "third contact",
        age: "10 weeks",
        route_of_admin: "Intramoscular",
        preventable_diseases: []
    },
    {
        name: "Pneumo 13-3",
        contact: "third contact",
        age: "10 weeks",
        route_of_admin: "Intramoscular",
        preventable_diseases: ["Pneumococcal infections"]
    },
    {
        name: "Vit A",
        contact: "third contact",
        age: "10 weeks",
        route_of_admin: "Oral",
        preventable_diseases: []
    },
    {
        name: "MR",
        contact: "third contact",
        age: "10 weeks",
        route_of_admin: "Subcutaneous",
        preventable_diseases: ["Measles", "Rubella"]
    },
    {
        name: "YF",
        contact: "third contact",
        age: "10 weeks",
        route_of_admin: "Subcutaneous",
        preventable_diseases: ["Yellow fever"]
    },
]
const abbrevations =[
    {
        abbrevation: "AOR",
        meaning: "Adjusted Odds Ratio"
    },
    {
        abbrevation: "BCG",
        meaning: "Baccile de Calmette et Guerin"
    },
    {
        abbrevation: "DTP",
        meaning: "Dipheteria Tetanus Pertusis"
    },
    {
        abbrevation: "EPI",
        meaning: "Expanded Program of Immunization"
    },
    {
        abbrevation: "HepB",
        meaning: "Hepatitis B"
    },
    {
        abbrevation: "Hib",
        meaning: "Hemophilus influenzae b"
    },
    {
        abbrevation: "HepB",
        meaning: "Hepatitis B"
    },
    {
        abbrevation: "IPV",
        meaning: "Inactivated Polio Vaccine"
    },
    {
        abbrevation: "OPV",
        meaning: "Oral Polio Vaccine"
    },
    {
        abbrevation: "PCV 13",
        meaning: "Pneumococcal Conjugated Vaccine 13"
    },
    {
        abbrevation: "Polio",
        meaning: "Poliomyelitis"
    },
]
const Vaccines = () => {
  return (
    <div className="flex justify-center items-center flex-col w-screen">
        <div className='h-[50vh] w-screen flex flex-col justify-start mb-12'>
            <NavBar />
            <CustomHero
                image={images.syringe}
                title="LIST OF VACCINES"
                subtitle="Better Health, Better Care, Better Life"
            />
      </div>
      <div className="py-8 w-full lg:w-[90%] flex flex-col items-center lg:items-start lg:flex-row justify-center">
        <div className="w-full lg:w-[60%]">
            {
                vaccines.map((vaccine, index)=>(
                    <VaccineList vaccine={vaccine} key={index} />
                ))
            }
        </div>
        <div className=" w-[90%] lg:w-[40%] bg-gray-100/50 py-6 px-8 h-fit">
            <h3 className="text-teal-700 mb-2">Abbrevations</h3>
            <ul>
                {
                    abbrevations.map((value)=>(
                        <li className="py-2 border-b">
                            <span>{value.abbrevation}: </span>
                            <span className="italic text-sm text-teal-500">{value.meaning}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Vaccines