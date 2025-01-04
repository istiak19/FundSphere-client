import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaRegTrashAlt, FaSearch } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyCampaign = () => {
    const campaignLoaded = useLoaderData()
    const { user, isDarkMode } = useContext(AuthContext)
    const campaignMatch = campaignLoaded.filter(campaign => campaign.email === user?.email)
    const [campaigns, setCampaigns] = useState(campaignMatch)

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://fund-sphere-server.vercel.app/campaigns/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your campaign has been deleted.",
                                icon: "success"
                            });
                            const remaining = campaigns.filter(campaign => campaign._id !== id)
                            setCampaigns(remaining)
                        }
                    })
            }
        });
    }
    return (
        <div className="overflow-x-auto my-20 w-11/12 mx-auto">
            <Helmet>
                <meta charSet="utf-8" />
                <title>FundSphere - MyCampaign</title>
            </Helmet>
            {
                campaigns.length === 0 ? <div>
                    <div className="flex flex-col justify-center items-center mb-20">
                        <p className="text-7xl font-semibold text-[#F2B33D]"><FaSearch /></p>
                        <p className="text-4xl">You have no campaign added yet...</p>
                        <p className="text-4xl">Please add some campaign</p>
                    </div>
                </div> : <table className="table">
                    <thead>
                        <tr className={`${isDarkMode && '*:text-white'}`}>
                            <th>Serial</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Donation</th>
                            <th>Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            campaigns.map((campaign, idx) => <tr key={campaign._id}>
                                <th>{idx + 1}</th>
                                <td>{campaign.title}</td>
                                <td>{campaign.description}</td>
                                <td>{campaign.type}</td>
                                <td>{campaign.donation} $</td>
                                <td>{campaign.deadline}</td>
                                <td>
                                    <Link to={`/my-campaign/${campaign._id}`} className="btn mr-3"><CiEdit /></Link>
                                    <button onClick={() => handleDelete(campaign._id)} className="btn"><FaRegTrashAlt /></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            }
        </div>
    );
};

export default MyCampaign;