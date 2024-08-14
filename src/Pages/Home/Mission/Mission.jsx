import missionImage from '../../../assets/Images/Mission/mission.png';
import heatIcon from '../../../assets/Images/Mission/heat.png';
import co2Icon from '../../../assets/Images/Mission/co2.png';
import foundIcon from '../../../assets/Images/Mission/found.png';


const Mission = () => {
    return (
        <div className="flex justify-center py-10 m-20 lg:m-40">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full max-w-7xl gap-16 opacity-100">
                <div className="flex-shrink-0 w-full md:w-1/4 lg:w-2/5">
                    <img className="w-full h-auto md:h-[100vh] lg:h-auto rounded-lg" src={missionImage} alt="mission-image" />
                </div>
                <div className="flex flex-col justify-between p-4 md:p-5 lg:p-10 w-full md:w-3/4 lg:w-3/5">
                    <div>
                        <small className="font-poppins text-lg font-semibold leading-[31.5px] text-[#4CAF50]">Our Mission</small>
                    </div>
                    <div>
                        <h1 className="font-sora text-2xl lg:text-4xl font-bold text-[#0E2510] leading-none lg:leading-tight">
                            Driving the Future of
                            <br /> Clean Energy <br /> Solutions
                        </h1>
                    </div>
                    <div>
                        <p className="font-poppins text-base text-[#6D6D6D] mt-4 mb-8 leading-relaxed">
                            Understand, Solve & Evolve <br />
                            Powering Your World with Reliable & Sustainable Energy. <br />
                            Affordable, cleaner and simple renewable energy solutions from a <br />
                            global energy partner.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-2 mt-5">
                        <div className="bg-[#F3FAF3] p-5 rounded-lg flex flex-col items-start">
                            <img className="w-12 h-16 mb-2" src={heatIcon} alt="stat-image" />
                            <h5 className="font-sora text-base font-semibold text-[#0E2510] mb-1">7.0 MW</h5>
                            <p className="font-poppins text-base text-[#6D6D6D]">7.0 MW of heat <br /> pumps installed</p>
                        </div>
                        <div className="bg-[#F3FAF3] p-5 rounded-lg flex flex-col items-start">
                            <img className="w-12 h-16 mb-2" src={co2Icon} alt="stat-image" />
                            <h5 className="font-sora text-base font-semibold text-[#0E2510] mb-1">65k tonnes</h5>
                            <p className="font-poppins text-base text-[#6D6D6D]">65,000 tonnes of <br /> carbon saved</p>
                        </div>
                        <div className="bg-[#F3FAF3] p-5 rounded-lg flex flex-col items-start">
                            <img className="w-12 h-16 mb-2" src={foundIcon} alt="stat-image" />
                            <h5 className="font-sora text-base font-semibold text-[#0E2510] mb-1">£850,000</h5>
                            <p className="font-poppins text-base text-[#6D6D6D]">£850,000 of grant <br /> funding raised</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;
