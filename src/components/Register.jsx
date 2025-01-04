import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Register = () => {
    const [showPassword, setShowPassword] = useState(true)
    const navigate = useNavigate()
    const [errorMsg, setErrorMsg] = useState('')
    const { signUpUser, updateProfileUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        // console.log(name, photo, email, password)

        setErrorMsg('')

        if (password.length < 6) {
            setErrorMsg('Password must be at least 6 characters long.')
            return;
        }

        if (!/[A-Z]/.test(password)) {
            setErrorMsg('Password must contain at least one uppercase letter.')
            return;
        }

        if (!/[a-z]/.test(password)) {
            setErrorMsg('Password must contain at least one lowercase letter.')
            return;
        }
        signUpUser(email, password)
            .then(result => {
                // console.log(result.user)
                const newUser = { name, email }
                updateProfileUser({ displayName: name, photoURL: photo })
                toast.success('Successfully register')
                navigate('/')

                fetch('https://fund-sphere-server.vercel.app/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        // if(data.insertedId){

                        // }
                    })

            })
            .catch(error => {
                // console.log(error)
                setErrorMsg(error.message)
            })
    }
    return (
        <div className="hero-content flex-col w-11/12 mx-auto">
            <div className="text-center lg:text-left">
                <h1 className="text-3xl font-bold">Create an account</h1>
            </div>
            <div className="card w-full max-w-md shrink-0 border-2">
                <form className="card-body" onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo" name="photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={showPassword ? 'password' : 'text'} name="password" placeholder="Password" className="input input-bordered" required />
                        <button onClick={() => setShowPassword(!showPassword)} className="absolute top-14 right-3">{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</button>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#F2B33D] text-white font-bold">Register</button>
                    </div>
                    <p>Already have an account? <Link to='/login' className="text-[#F2B33D] border-b border-orange-300">Login</Link></p>
                    {
                        errorMsg && <p className="text-red-500">{errorMsg}</p>
                    }
                </form>
            </div>
        </div>
    );
};

export default Register;