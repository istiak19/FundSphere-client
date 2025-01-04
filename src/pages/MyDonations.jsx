import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaSearch } from "react-icons/fa";
import { Helmet } from "react-helmet";

const MyDonations = () => {
  const donateLoaded = useLoaderData()
  const { user, isDarkMode } = useContext(AuthContext)
  const donates = donateLoaded.filter(donate => donate.email === user?.email)

  return (
    <div className="my-20 w-11/12 mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>FundSphere - MyDonation</title>
      </Helmet>
      {
        donates.length === 0 ? <div>
          <div className="flex flex-col justify-center items-center mb-28">
            <p className="text-7xl font-semibold text-[#F2B33D]"><FaSearch /></p>
            <p className="text-4xl">You have no campaign added yet...</p>
            <p className="text-4xl">Please add some campaign</p>
          </div>
        </div> : <div className="grid lg:grid-cols-3 gap-4">
          {
            donates.map(donate => <div key={donate._id} className={`card bg-base-100 border border-[#F2B33D] shadow-xl`}>
              <div className="card-body">
                <h2 className="text-center font-semibold text-4xl underline underline-offset-1 pb-3">My Donated</h2>
                <h2 className="card-title">{donate.title}</h2>
                <p><span className="font-semibold">Description: </span>{donate.description}</p>
                <p><span className="font-semibold">Donation Type: </span>{donate.type}</p>
                <p><span className="font-semibold">Donation Amount: </span>{donate.donation} $</p>
              </div>
            </div>)
          }
        </div>
      }
    </div>
  );
};

export default MyDonations;