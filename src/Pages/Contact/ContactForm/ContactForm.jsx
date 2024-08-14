
const ContactForm = () => {
    return (
        <div className="text-center flex flex-col justify-between gap-5 mx-5 my-10 md:mx-10 md:my-12">
            <h1 className="font-sora text-4xl font-bold text-[#0E2510] leading-tight">Connect with us</h1>
            <form className="mx-10 md:mx-40 px-8">
                <div className="form-control mt-5">
                    <input type="text" name='firstName' placeholder="First Name" className="input shadow-lg" />
                </div>

                <div className="form-control mt-5">
                    <input type="text" name='lastName' placeholder="Last Name" className="input shadow-lg" />
                </div>

                <div className="form-control mt-5">
                    <input type="text" name='email' placeholder="Email address" className="input shadow-lg" />
                </div>

                <div className="form-control mt-5">
                    <input type="number" name='phone' placeholder="Phone" className="input shadow-lg" />
                </div>

                <div className="form-control mt-5">
                    <input type="text" name='address' placeholder="Address" className="input shadow-lg" />
                </div>

                <div className="form-control mt-5">
                    <input type="text" name='time' placeholder="Preferred Time" className="input shadow-lg" />
                </div>

                <div className="form-control mt-5">
                    <textarea rows="10" cols="150" name="comment" placeholder="How can we help you?" className="p-5 shadow-lg" />
                </div>



                <div className="description-style">
                    <p className="mt-5">You can choose your marketing preferences below. These let you decide how you’d like to hear from Shell <br /> Energy UK Ltd. By opting in you will be kept informed about:</p>
                    <ul className="mt-4">
                        <li className="ml-10">Our energy supply and solutions offering</li>
                        <li className="ml-10">Events, newsletters, webinars, surveys, emails, company and industry news</li>
                    </ul>
                    <h3 className="mt-5">How would you like to hear from us?</h3>
                    <label>
                        <input
                            type="checkbox"
                            name="email"
                        />
                        Email
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="phone"
                        />
                        Phone
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="post"
                        />
                        Post
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="allAbove"
                        />
                        All above this
                    </label>
                    <br />
                    <div className="form-control mt-6">
                        <input className="btn bg-[#4CAF50] text-white" type="submit" value="Submit" />
                    </div>
                </div>
            </form>
            <p className="mx-10 px-8 md:mx-40 mt-5 text-left font-semibold">
                You can unsubscribe from marketing communications at any time.<br />
                You can find out more about how to unsubscribe in our Privacy policy.<br />
                Your preferences also include offers and news from other subsidiaries of X company.
            </p>
        </div>
    );
};

export default ContactForm;