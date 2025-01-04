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
            <table className="table table-sm w-full">
                <thead>
                    <tr className={`${isDarkMode && '*:text-white'}`}>
                        <th className="text-sm px-2">Serial</th>
                        <th className="text-sm px-2">Title</th>
                        <th className="text-sm px-2">Description</th>
                        <th className="text-sm px-2">Type</th>
                        <th className="text-sm px-2">Donation</th>
                        <th className="text-sm px-2">Deadline</th>
                        <th className="text-sm px-2">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        campaigns.map((campaign, idx) => <tr key={campaign._id}>
                            <th className="px-2">{idx + 1}</th>
                            <td className="px-2">{campaign.title}</td>
                            <td className="px-2">{campaign.description}</td>
                            <td className="px-2">{campaign.type}</td>
                            <td className="px-2">{campaign.donation} $</td>
                            <td className="px-2">{campaign.deadline}</td>
                            <td className="px-2">
                                <Link to={`/campaign/${campaign._id}`} className="btn">See More</Link>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllCampaign;