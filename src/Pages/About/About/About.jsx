import Mission from "../../Home/Mission/Mission";
import Expert from "../../Home/Expert/Expert";
import Chose from "../../Home/Chose/Chose";
import Banner from "../Banner/Banner";
import Value from "../Value/Value";
import Process from "../../Home/Process/Process";


const About = () => {
    return (
        <div>
            <Banner></Banner>
            <Mission></Mission>
            <Value></Value>
            <Expert></Expert>
            <Process></Process>
            <Chose></Chose>
        </div>
    );
};

export default About;