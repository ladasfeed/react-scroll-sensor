import React from 'react'
import './index.css'
import NavSensor from './NavSensorUI'
import ScrollSensor from './NavSensorUI/ScrollSensor'
import useScroll from './NavSensorUI/useScroll'

const arrayOfSections = [
    <section className="section_1"></section>,
    <section className="section_2"></section>,
    <section className="section_3"></section>,
    <section className="section_4"></section>
]

const NavSensorTest:React.FC = () => {
    const [tempSection, setTempSection] = useScroll();
    
    return (
        <div>
            <NavSensor tempSection={tempSection} setTempSection={setTempSection} array={arrayOfSections}/>
            {arrayOfSections.map((item, index)=> {
                const scrollFunc = () => setTempSection(index);
                return (
                    <ScrollSensor 
                        selfIndex={index} 
                        key={index} 
                        scrollFunc={scrollFunc} 
                        boundaries={[200, -200]}
                    >
                        {item}
                    </ScrollSensor>
                )
            })}
        </div>
    )
}
export default NavSensorTest