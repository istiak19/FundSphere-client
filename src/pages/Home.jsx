import { Helmet } from "react-helmet";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import RunningCampaign from "../components/RunningCampaign";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
const Home = () => {
    return (
        <div className="my-10">
            <Helmet>
                <meta charSet="utf-8" />
                <title>FundSphere</title>
            </Helmet>
            <Banner></Banner>
            <div className="w-11/12 mx-auto">
                <RunningCampaign></RunningCampaign>
                <Hero></Hero>
                <Testimonials></Testimonials>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;