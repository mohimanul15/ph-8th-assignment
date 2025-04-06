import useTitle from "../../Utilities/CustomHook/useTitle";

useTitle

const Contact = () => {

    useTitle('Contact: Gadget Heaven');    

    return (
        <div>

            <div className="bg-main py-5">
                <div className="container mx-auto text-center">
                    <h2 className="font-bold text-xl md:text-3xl text-white">Contact</h2>
                    <p className="font-light text-xs md:text-base text-white max-w-2xl mx-auto mt-4 px-2">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>
            </div>

            <fieldset className="fieldset max-w-2xl bg-base-200 border border-base-300 p-4 rounded-box mx-auto my-11">
                <legend className="fieldset-legend text-2xl">Contact Form</legend>

                <label className="fieldset-label">Name</label>
                <input type="text" className="input w-full rounded-lg" placeholder="Full Name" />

                <label className="fieldset-label">Email</label>
                <input type="text" className="input w-full rounded-lg" placeholder="Your Email" />

                <label className="fieldset-label">Phone</label>
                <input type="text" className="input w-full rounded-lg" placeholder="Phone Number" />

                <label className="fieldset-label">Description</label>
                <textarea className="w-auto h-32 bg-white p-2 rounded-lg outline-1 outline-gray-300" placeholder="Write a Description.."></textarea>

                <input type="button" className="btn my-4 rounded-lg bg-main text-white hover:animate-pulse hover:duration-300" value="SUBMIT" />
            </fieldset>
        </div>
    );
};

export default Contact;