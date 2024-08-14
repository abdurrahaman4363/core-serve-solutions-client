import SpecialistForm from "../../SingleService/SpecialistForm/SpecialistForm";
import EnergyStat from "../EnergyStat/EnergyStat";
import MoreProduct from "../MoreProduct/MoreProduct";
import SingleProductBanner from "../SingleProductBanner/SingleProductBanner";

const SingleProduct = () => {
    return (
        <div>
            <SingleProductBanner></SingleProductBanner>
            <EnergyStat></EnergyStat>
            <SpecialistForm></SpecialistForm>
            <MoreProduct></MoreProduct>
        </div>
    );
};

export default SingleProduct;