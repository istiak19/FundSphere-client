import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";

const AllCampaign = () => {

    const campaignLoaded = useLoaderData()
    const [campaigns, setCampaigns] = useState(campaignLoaded)
    const { isDarkMode } = useContext(AuthContext)

    const handleSort = () => {
        const sortDonation = [...campaigns].sort((a, b) => a.donation - b.donation);
        setCampaigns(sortDonation);
    }

    return (
        <div className="overflow-x-auto my-16 w-11/12 mx-auto">
            <Helmet>
                <meta charSet="utf-8" />
                <title>FundSphere - AllCampaign</title>
            </Helmet>
            <div className="flex justify-end mb-5">
                <button onClick={handleSort} className="btn text-white bg-[#F2B33D]">Sort By Donation</button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    campaigns.map(campaign => <div key={campaign._id} className={`card card-compact ${isDarkMode && 'bg-[#1D232A]'}  bg-base-100 shadow-xl border border-red-400`}>
                        <figure className="h-60 p-4">
                            <img className="w-full h-full rounded-lg"
                                src={campaign.image}
                                alt="Campaign" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{campaign.title}</h2>
                            <p>{campaign.type}</p>
                            <p>{campaign.donation}
                                $</p>
                            <p><span className="font-semibold">Deadline:</span> {campaign.deadline}</p>
                            <div className="card-actions">
                                <Link to={`/campaign/${campaign._id}`} className="btn w-full  bg-[#F2B33D] text-white">See More</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllCampaign;