import { createBrowserRouter } from "react-router";
import App from '../../App.jsx';
import Home from '../../Components/Home/Home.jsx';
import Statistics from "../../Components/Statistics/Statistics.jsx";
import Dashboard from "../../Components/Dashboard/Dashboard.jsx";
import SinglePage from "../../Components/Products/ProViews/SinglePage/SinglePage.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children:[
            {
                path: '/',
                Component: Home,
                loader: async ()=>await fetch('/products.json')
                                .then(res=>res.json())
            },
            {
                path:'/products/:prodId',
                loader: ({params}) =>fetch('/products.json'),
                Component: SinglePage
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