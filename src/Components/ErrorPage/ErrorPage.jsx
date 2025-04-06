import { Link, useRouteError } from "react-router";
import useTitle from "../../Utilities/CustomHook/useTitle";

const ErrorPage = () => {

    const error = useRouteError();

    useTitle('Error 404 : Not Found')

    return (
        <div className="min-h-svh w-full flex flex-col justify-center items-center gap-10">
            <h1 className="text-4xl font-extrabold">Error 404</h1>
            <Link to='/'>Click to redirect Home</Link>
            <p>{error}</p>
        </div>
    );
};

export default ErrorPage;