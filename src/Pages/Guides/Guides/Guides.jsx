import Process from "../../Home/Process/Process";
import Question from "../../OurService/Question/Question";
import AllBlog from "../AllBlog/AllBlog";
import GuideBanner from "../GuideBanner/GuideBanner";

const Guides = () => {
    return (
        <div>
            <GuideBanner></GuideBanner>
            <AllBlog></AllBlog>
            <Question></Question>
            <Process></Process>
        </div>
    );
};

export default Guides;