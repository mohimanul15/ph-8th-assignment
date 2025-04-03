import { createBrowserRouter } from "react-router";
import App from '../../App.jsx';
import Home from '../../Components/Home/Home.jsx';
import Statistics from "../../Components/Statistics/Statistics.jsx";
import Dashboard from "../../Components/Dashboard/Dashboard.jsx";
import SinglePage from "../../Components/Products/ProViews/SinglePage/SinglePage.jsx";
import Cart from "../../Components/Dashboard/Cart/Cart.jsx";
import Wish from "../../Components/Dashboard/Wish/Wish.jsx";
import { Component } from "react";

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
                loader: () =>fetch('/products.json'),
                Component: SinglePage
            },
            {
                path: '/statistics',
                Component: Statistics
            },
            {
                path: '/dashboard',
                loader: ()=>fetch('/products.json'),
                Component: Dashboard,
                children:[
                    {
                        index:'/',
                        Component: Cart
                    },
                    {
                        path:'/dashboard/cart',
                        Component:Cart
                    },
                    {
                        path:'/dashboard/wishlist',
                        Component:Wish
                    }
                ]
            }
        ]
    }
])


export default router;