const Contact = () => {
    return (
        <div className="max-w-3xl mx-auto">
            <div>
                <h3 className="text-2xl font-bold text-center my-10">CONTACT FORM</h3>
            </div>
            <div className="flex gap-5">
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Name*</span>
                    </div>
                    <input type="text" placeholder="Enter your name" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Email*</span>
                    </div>
                    <input type="text" placeholder="Enter your email" className="input input-bordered w-full" />
                </label>
            </div>
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text">Phone*</span>
                </div>
                <input type="text" placeholder="Enter your phone number" className="input input-bordered w-full" />
            </label>
            <label className="form-control">
                <div className="label">
                    <span className="label-text">Message*</span>
                </div>
                <textarea className="textarea textarea-bordered h-24" placeholder="Write your message here"></textarea>
            </label>
            <div className="text-center">
                <button className="btn bg-[#F2B33D] text-white mt-3">Send Message</button>
            </div>
        </div>
    );
};

export default Contact;