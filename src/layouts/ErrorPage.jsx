import { Link, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate()
    return (
        <div className="flex justify-center items-center mt-40 space-y-5 flex-col">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link onClick={() => navigate('/')} className="btn bg-[#28A745]">Go Home</Link>
        </div>
    );
};

export default ErrorPage;