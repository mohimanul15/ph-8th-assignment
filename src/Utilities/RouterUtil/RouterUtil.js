import { createBrowserRouter } from "react-router";
import App from '../../App.jsx';
import Home from '../../Components/Home/Home.jsx';
import Statistics from "../../Components/Statistics/Statistics.jsx";
import Dashboard from "../../Components/Dashboard/Dashboard.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children:[
            {
                path: '/',
                Component: Home
            },
            {
                path: '/statistics',
                Component: Statistics
            },
            {
                path: '/dashboard',
                Component: Dashboard
            }
        ]
    }
])


export default router;