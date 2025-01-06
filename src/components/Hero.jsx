import { Typewriter } from 'react-simple-typewriter';
import { Roll, Slide } from "react-awesome-reveal";

const Hero = () => {

    return (
        <div className="flex flex-col justify-center items-center text-center py-12 px-6">
            <h1 className="text-4xl font-bold mb-6 leading-relaxed">
                Empowering Campaigns for{' '}
                <span className="text-[#F2B33D]">
                    <Typewriter
                        words={['Personal Issue', 'Startup', 'Business', 'Creative Ideas']}
                        loop={Infinity}
                        cursor
                        cursorStyle="_"
                        typeSpeed={100}
                        deleteSpeed={70}
                        delaySpeed={1500}
                    />
                </span>
            </h1>
            <p className="text-lg mb-6 text-gray-700 max-w-2xl">
                Whether you're addressing a personal need, launching a startup, expanding your business, or pursuing creative ideas, our platform is here to support your vision and connect you with a community that cares.
            </p>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Roll>
                    <div className="p-4 border-2 border-[#F2B33D] shadow-lg rounded-md">
                        <h3 className="text-xl font-bold mb-2">Personal Issue</h3>
                        <p className="text-gray-600">
                            Raise funds for medical expenses, emergencies, education, and more.
                        </p>
                    </div>
                </Roll>
                <Slide direction="up">
                    <div className="p-4 border-2 border-[#F2B33D] shadow-lg rounded-md">
                        <h3 className="text-xl font-bold mb-2">Startup</h3>
                        <p className="text-gray-600">
                            Turn your innovative business ideas reality with community support.
                        </p>
                    </div>
                </Slide>
                <Roll>
                    <div className="p-4 border-2 border-[#F2B33D] shadow-lg rounded-md">
                        <h3 className="text-xl font-bold mb-2">Business</h3>
                        <p className="text-gray-600">
                            Expand your business with the help of passionate backers.
                        </p>
                    </div>
                </Roll>
                <Slide direction="up">
                    <div className="p-4 border-2 border-[#F2B33D] shadow-lg rounded-md">
                        <h3 className="text-xl font-bold mb-2">Creative Ideas</h3>
                        <p className="text-gray-600">
                            Share your artistic and creative visions and find your supporters.
                        </p>
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default Hero;