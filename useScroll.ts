import { useState } from "react"

const useScroll = ():[any,any] => {
    const [tempSection, setTempSection] = useState(0)
    const setTempSectionHandler = (value: number) => {
        setTempSection(value)
    }
    
    return [
        tempSection,
        setTempSectionHandler
    ]
}
export default useScroll