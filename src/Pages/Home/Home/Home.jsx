import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Chose from "../Chose/Chose";
import Expert from "../Expert/Expert";
import Mission from "../Mission/Mission";
import Process from "../Process/Process";
import Product from "../Product/Product";
import Review from "../Review/Review";
import Service from "../Service/Service";


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Mission></Mission>
            <Product></Product>
            <Service></Service>
            <Expert></Expert>
            <Process></Process>
            <Chose></Chose>
            <Review></Review>
            <Blog></Blog>
        </div>
    )
};

export default Home;