import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const RunningCampaign = () => {
    const campaignLoaded = useLoaderData()
    const { isDarkMode } = useContext(AuthContext)
    const [campaigns, setCampaigns] = useState(campaignLoaded)

    useEffect(() => {
        const sixCampaigns = campaigns.slice(0, 6);
        setCampaigns(sixCampaigns);
    }, [campaignLoaded]);

    return (
        <div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    campaigns.map(campaign => <div key={campaign._id} className={`card card-compact ${isDarkMode && 'bg-[#1D232A]'}  bg-base-100 shadow-xl border border-red-400`}>
                        <figure className="h-60 p-4">
                            <img className="w-full h-full rounded-lg"
                                src={campaign.image}
                                alt="Campaign" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{campaign.title}</h2>
                            <p>{campaign.description}</p>
                            <p><span className="font-semibold">Campaign Type</span>: {campaign.type}</p>
                            <p><span className="font-semibold">Minimum Donation</span>: {campaign.donation}
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

export default RunningCampaign;