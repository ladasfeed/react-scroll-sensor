import React, { useRef, useEffect } from 'react'


type ScrollSensorType = {
    children: any,
    scrollFunc:()=>void,
    boundaries:[number,number],
    selfIndex: number
}

const ScrollSensor:React.FC<ScrollSensorType> = ({ children, scrollFunc, boundaries, selfIndex }) => {

    const checkSection = () => {
        let data = ref.current?.getBoundingClientRect().top;
        if (data!==undefined && (data < boundaries[0]) && (data > boundaries[1])) {
            scrollFunc()
        }
    }

    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        checkSection()
        document.addEventListener('scroll', checkSection)
        return () => document.removeEventListener('scroll', checkSection)
    }, [0])


    return (
        <div id={`sec_${selfIndex}`} ref={ref}>
            {children} 
        </div>
    )
}

export default ScrollSensor;