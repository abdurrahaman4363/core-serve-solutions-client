import AllService from "../AllService/AllService";
import OurServiceBanner from "../OurServiceBanner/OurServiceBanner";
import Question from "../Question/Question";

const OurService = () => {
    return (
        <div>
            <OurServiceBanner></OurServiceBanner>
            <AllService></AllService>
            <Question></Question>
        </div>
    );
};

export default OurService;