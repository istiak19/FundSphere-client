import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Details = () => {
    const campaign = useLoaderData()
    const { user } = useContext(AuthContext)

    const isDeadlinePassed = (deadline) => {
        const currentDate = new Date();
        const campaignDeadline = new Date(deadline);
        return currentDate > campaignDeadline;
    };

    const handleDonate = (name, email, title, donation, description, type) => {
        const donate = { name, email, title, donation, description, type }

        fetch('https://fund-sphere-server.vercel.app/donates', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(donate)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    toast.success('Donation Successfully')
                }
            })
    }

    const handleDeadline = () => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Donation deadline is over.Thank your interesting!",
        });
    }

    return (
        <div className="card card-compact bg-base-100 shadow-xl border border-red-400 w-11/12 mx-auto my-20">
            <Helmet>
                <meta charSet="utf-8" />
                <title>FundSphere - Details</title>
            </Helmet>
            <figure className="h-[450px] p-4">
                <img className="w-full h-full rounded-lg"
                    src={campaign.image}
                    alt="Campaign" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{campaign.title}</h2>
                <p>{campaign.description}</p>
                <p><span className="font-semibold">Campaign Type</span>: {campaign.type}</p>
                <p><span className="font-semibold">Minimum Donation amount:</span> {campaign.donation} $</p>
                <div className="card-actions mt-2">
                    {isDeadlinePassed(campaign.deadline) ?
                        <button onClick={handleDeadline} className="btn w-full text-xl bg-[#F2B33D] text-white cursor-not-allowed">
                            Donation
                        </button>
                        :
                        <button
                            onClick={() => handleDonate(user.name, user.email, campaign.title, campaign.donation, campaign.description, campaign.type)}
                            className="btn w-full text-xl bg-[#F2B33D] text-white"
                        >
                            Donate
                        </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Details;