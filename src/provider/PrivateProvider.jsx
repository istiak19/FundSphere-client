import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";

const PrivateProvider = ({ children }) => {
    // const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        return children
    }
    return (
        <div>
            <Navigate to='/login'></Navigate>
        </div>
    );
};

export default PrivateProvider;