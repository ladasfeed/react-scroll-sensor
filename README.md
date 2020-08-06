# react-scroll-sensor
Here is simple mini-library which was created to make your website more beautiful. It allows to visualize order of section on page.
To use that you need to make some changes in your react code.
Before:
return (
<div>
  <section className="section_1"></section>,
  <section className="section_2"></section>,
  <section className="section_3"></section>,
  <section className="section_4"></section>
</div>
)

After:

...
import ScrollSensor from './NavSensorUI/ScrollSensor'
import useScroll from './NavSensorUI/useScroll'

const arrayOfSections = [
    <section className="section_1"></section>,
    <section className="section_2"></section>,
    <section className="section_3"></section>,
    <section className="section_4"></section>
]
const YourPage = () => {
    const [tempSection, setTempSection] = useScroll();
    
    return (
        <div>
            <NavSensor tempSection={tempSection}/>
            {arrayOfSections.map((item, index)=> {
                const scrollFunc = () => setTempSection(index);
                return (
                    <ScrollSensor key={index} scrollFunc={scrollFunc} boundaries={[200, -200]}>
                        {item}
                    </ScrollSensor>
                )
            })}
        </div>
    )
}

1. Create array of sections
2. Create tempSection and setter by useScroll()
3. Nav Sensor is your component which will visualize tempSection. It will your custom component, it can take tempSection(number), arrayOfSections(or count - 
it just for render count of points), and sectionSetter if you want to move over page by anchors. There is example.
4. The code after NavSensor is neccesary. We should map array and wrap each section. You can change only boundaries(px) - that determiate area for detection section (around
 upper boundary).
