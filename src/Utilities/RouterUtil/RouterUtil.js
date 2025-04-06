import { createBrowserRouter } from "react-router";
import App from '../../App.jsx';
import Home from '../../Components/Home/Home.jsx';
import Statistics from "../../Components/Statistics/Statistics.jsx";
import Dashboard from "../../Components/Dashboard/Dashboard.jsx";
import SinglePage from "../../Components/Products/ProViews/SinglePage/SinglePage.jsx";
import Cart from "../../Components/Dashboard/Cart/Cart.jsx";
import Wish from "../../Components/Dashboard/Wish/Wish.jsx";
import { Component } from "react";
import ErrorPage from "../../Components/ErrorPage/ErrorPage.jsx";

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
                loader: ()=>fetch('/products.json'),
                Component: Statistics
            },
            {
                path: '/dashboard',
                loader: ()=>fetch('/products.json'),
                Component: Dashboard,
                children:[
                    {
                        index:'/',
                        loader:()=>fetch('/products.json'),
                        Component: Cart
                    },
                    {
                        path:'/dashboard/cart',
                        loader:()=>fetch('/products.json'),
                        Component:Cart
                    },
                    {
                        path:'/dashboard/wishlist',
                        loader:()=>fetch('/products.json'),
                        Component:Wish
                    }
                ]
            }
        ]
    },{
        path: '*',
        Component:ErrorPage
    }
])


export default router;