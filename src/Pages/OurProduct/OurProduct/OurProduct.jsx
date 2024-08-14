import Review from "../../Home/Review/Review";
import AllProduct from "../AllProduct/AllProduct";
import OurProductBanner from "../OurProductBanner/OurProductBanner";

const OurProduct = () => {
    return (
        <div>
            <OurProductBanner></OurProductBanner>
            <AllProduct></AllProduct>
            <Review></Review>
        </div>
    );
};

export default OurProduct;