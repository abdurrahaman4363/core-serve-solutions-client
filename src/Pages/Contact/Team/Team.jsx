import memberImage1 from '../../../assets/Images/Expert/teamMember1.png';
import memberImage2 from '../../../assets/Images/Expert/teamMember2.png';
import memberImage3 from '../../../assets/Images/Expert/teamMember3.png';
import facebook from '../../../assets/Images/icons/facebook_logo.png';
import email from '../../../assets/Images/icons/email_logo.png';

const Team = () => {
    return (
        <div className="text-center flex flex-col justify-between gap-5 mx-5 my-10 md:mx-10 md:my-28">
            <div className='mb-10 md:mb-20'>
                <h1 className="font-sora text-4xl font-bold text-[#0E2510] leading-tight">Our team</h1>
            </div>

            <div className='mx-5 my-20 md:mx-40'>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-40">
                    <div className='team-card'>
                        <div className='profile-image'>
                            <img src={memberImage1} alt='Wade Warren' />
                        </div>
                        <div className='member-details'>
                            <h3 className='team-member-name'>Wade Warren</h3>
                            <p className='team-member-designation'>Technical director</p>
                        </div>
                        <div className='contact-info'>
                            <div className='flex-style'>
                                <img className='contact-icon' src={email} alt='Facebook' />
                                <p>exaamle@company.com</p>
                            </div>
                            <div className='flex-style'>
                                <img className='contact-icon' src={facebook} alt='Facebook' />
                                <p>Wade Warren</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='team-card'>
                        <div className='profile-image'>
                            <img src={memberImage2} alt='Jenny Wilson' />
                        </div>
                        <div className='member-details'>
                            <h3 className='team-member-name'>Jenny Wilson</h3>
                            <p className='team-member-designation'>Programme director</p>
                        </div>
                        <div className='contact-info'>
                            <div className='flex-style'>
                                <img className='contact-icon' src={email} alt='Facebook' />
                                <p>exaamle@company.com</p>
                            </div>
                            <div className='flex-style'>
                                <img className='contact-icon' src={facebook} alt='Facebook' />
                                <p>Jenny Wilson</p>
                            </div>
                        </div>
                    </div>
                    <div className='team-card'>
                        <div className='profile-image'>
                            <img src={memberImage3} alt='Esther Howard' />
                        </div>
                        <div className='member-details'>
                            <h3 className='team-member-name'>Esther Howard</h3>
                            <p className='team-member-designation'>Commercial director</p>
                        </div>
                        <div className='contact-info'>
                            <div className='flex-style'>
                                <img className='contact-icon' src={email} alt='Facebook' />
                                <p>exaamle@company.com</p>
                            </div>
                            <div className='flex-style'>
                                <img className='contact-icon' src={facebook} alt='Facebook' />
                                <p>Esther Howard</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Team;