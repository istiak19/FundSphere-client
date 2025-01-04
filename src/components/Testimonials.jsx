import { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../provider/AuthProvider";

const Testimonials = () => {

    const [testimonials, setTestimonials] = useState([]);
    const { isDarkMode } = useContext(AuthContext)

    useEffect(() => {
        fetch("/testimonials.json")
            .then((res) => res.json())
            .then((data) => setTestimonials(data));

        AOS.init({
            duration: 2000,
            offset: 50,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <div className="w-11/12 mx-auto text-center px-4 py-12">
            <div data-aos="fade-up" data-aos-delay="100">
                <h2 className="text-3xl font-semibold text-[#F59E0B] mb-4">
                    Success Stories
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    Explore the incredible stories of impact and success made possible by Crowdcube.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, idx) => (
                    <div
                        key={idx}
                        className={`${isDarkMode && 'bg-[#1D232A]'} p-6 rounded-lg shadow-lg border border-[#F2B33D]`}
                        data-aos="fade-up"
                        data-aos-delay='100'
                    >
                        <p className="text-gray-600 italic mb-4">
                            "{testimonial.message}"
                        </p>
                        <h4 className="text-xl font-semibold text-[#F2B33D]">
                            {testimonial.name}
                        </h4>
                        <p className="text-gray-500">{testimonial.location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;