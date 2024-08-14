import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const BlogSection = () => {
    return (
        <div className="section-container">
            <div className="text-left mx-40">
                <h1 className='h1-text'>
                    <p className='text-black'>Why calculate energy usage?</p>
                </h1>
            </div>
            <div className="text-left mx-40">
                <p className="text-[#6D6D6D]">The simplest and most accurate way to see how much energy you’re consuming is When you calculate your energy usage in terms of the number of units used instead of how much it costs, you give yourself a fair measure to work with. Over time, energy costs can fluctuate, meaning that the price per unit changes. Comparing your total energy costs one year with those of the following year may not be a fair comparison to evaluate your usage- because £1 might not buy the same amount of energy from one year to the next. <br /> <br />
                    That’s where measuring your actual usage comes in. One unit of energy is the same no matter how much time passes, so measuring these units allows you to compare your energy consumption fairly to understand whether you’ve used more or less energy than you did previously.  <br /> <br />
                    Why would you want to know that? Well, lowering your energy usage is often an excellent way to reduce your energy bills and save money. If you have an idea of how much energy you’re using, you can begin to understand which of your energy habits are costing you the most and cut down accordingly to reduce costs. Measuring your energy usage month after month can then help you to see whether you’re staying on track. <br /> <br />
                    Another reason some people measure their energy usage is so they can conserve environmental resources. By using less energy, you place less of a burden on the environment and therefore help to preserve the planet and the environment for future generations. <br /> <br />
                    Finally, calculating your total energy usage can be an important first step in making decisions about your energy supplier. Whether you’re a business owner in need of gas and electricity, or you’re searching for the best energy deal for your home, you likely have a budget of how much money you can afford to set aside for energy costs. <br /> <br />
                    Knowing how much energy you’re currently using can give you insight into the maximum price per unit you can afford to pay, helping to narrow down the most appropriate suppliers for you. This means you can budget for the amount of energy you currently use while, if you choose to do so, making efforts in the meantime to reduce your overall usage.</p>
            </div>

            <div className='mx-40 mt-5 mr-5' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>

                <button className='see-button'>
                    <FontAwesomeIcon icon={faArrowLeftLong} className='mr-3' />Previous post
                </button>

                <button className='see-button'> Next post
                    <FontAwesomeIcon icon={faArrowRightLong} className='ml-3' />
                </button>

            </div>
        </div>
    );
};

export default BlogSection;