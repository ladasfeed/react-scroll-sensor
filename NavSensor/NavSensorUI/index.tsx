import React from 'react'
import './NavSensor.css'

const NavSensor = ({tempSection, setTempSection, array}:{tempSection:number, setTempSection:(value:number)=>void, array:Array<React.ReactNode>}) => {

    return (
        <div className="nav-sensor">
            {array.map((item, index)=>{
                return (
                    <a
                        href={`#sec_${index}`}
                        onClick={()=>setTempSection(index)}
                        className={`nav-sensor-item ${tempSection==index && 'nav-sensor-item-a'}`}>
                    </a>
                )
            })}
        </div>
    )
}
export default NavSensor