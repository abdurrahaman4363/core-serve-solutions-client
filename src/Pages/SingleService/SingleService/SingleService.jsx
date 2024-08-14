import MoreService from "../MoreService/MoreService";
import ServicePlan from "../ServicePlan/ServicePlan";
import ServiceProcess from "../ServiceProcess/ServiceProcess";
import SingleServiceBanner from "../SingleServiceBanner/SingleServiceBanner";
import SpecialistForm from "../SpecialistForm/SpecialistForm";
import Tariff from "../Tariff/Tariff";

const SingleService = () => {
    return (
        <div>
            <SingleServiceBanner></SingleServiceBanner>
            <ServicePlan></ServicePlan>
            <ServiceProcess></ServiceProcess>
            <Tariff></Tariff>
            <SpecialistForm></SpecialistForm>
            <MoreService></MoreService>
        </div>
    );
};

export default SingleService;