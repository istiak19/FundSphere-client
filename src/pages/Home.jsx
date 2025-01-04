import { Helmet } from "react-helmet";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import RunningCampaign from "../components/RunningCampaign";
import Testimonials from "../components/Testimonials";
const Home = () => {
    return (
        <div className="my-10 w-11/12 mx-auto">
            <Helmet>
                <meta charSet="utf-8" />
                <title>FundSphere</title>
            </Helmet>
            <Banner></Banner>
            <RunningCampaign></RunningCampaign>
            <Hero></Hero>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;