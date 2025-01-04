import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const UpdatePage = () => {
    const campaign = useLoaderData()
    const { _id, image, title, type, description, donation, deadline, email, name } = campaign
    // console.log(_id)

    const handleUpdateCampaign = e => {
        e.preventDefault()
        const form = new FormData(e.target)
        const image = form.get('image')
        const title = form.get('title')
        const type = form.get('type')
        const description = form.get('description')
        const donation = form.get('donation')
        const deadline = form.get('deadline')
        const email = form.get('email')
        const name = form.get('name')
        const updateCampaign = { image, title, type, description, donation, deadline, email, name }
        // console.log(updateCampaign)
        fetch(`https://fund-sphere-server.vercel.app/campaigns/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCampaign)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    toast('Successfully updated campaign')
                }
            })
    }

    return (
        <div className="max-w-2xl mx-auto p-6 rounded-lg my-20 border border-[#F2B33D] shadow-2xl">
            <h2 className="text-2xl font-semibold mb-4 text-center">Update Campaign</h2>
            <form className="space-y-4" onSubmit={handleUpdateCampaign}>
                <div>
                    <label className="block text-sm font-medium mb-1">Image URL</label>
                    <input
                        type="text"
                        name="image"
                        defaultValue={image}
                        placeholder="Enter image URL"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Campaign Title</label>
                    <input
                        type="text"
                        name="title"
                        defaultValue={title}
                        placeholder="Enter campaign title"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Campaign Type</label>
                    <select
                        name="type"
                        defaultValue={type}
                        className="select select-bordered w-full"
                    >
                        <option value="Personal issue">Personal Issue</option>
                        <option value="Startup">Startup</option>
                        <option value="Business">Business</option>
                        <option value="Creative ideas">Creative Ideas</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea
                        defaultValue={description}
                        name="description"
                        placeholder="Write campaign description"
                        className="textarea textarea-bordered w-full"
                        required
                    ></textarea>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Minimum Donation Amount
                    </label>
                    <input
                        defaultValue={donation}
                        type="text"
                        name="donation"
                        placeholder="Enter minimum donation amount"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Deadline</label>
                    <input
                        defaultValue={deadline}
                        type="date"
                        name="deadline"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">User Email</label>
                    <input
                        type="email"
                        name='email'
                        value={email || ""}
                        className="input input-bordered w-full bg-gray-100"
                        readOnly
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">User Name</label>
                    <input
                        type="text"
                        name='name'
                        value={name || ""}
                        className="input input-bordered w-full bg-gray-100"
                        readOnly
                    />
                </div>
                <button type="submit" className="btn bg-[#F2B33D] text-white w-full">
                    Update Campaign
                </button>
            </form>
        </div>
    );
};

export default UpdatePage;