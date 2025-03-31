import { useLoaderData } from "react-router";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Hero from "./Hero/Hero";
import { useEffect, useState } from "react";

const Home = () => {

    const [value, setValue] = useState([]);

    const data = useLoaderData().products;

    useEffect(() => {
        const val = data;
        setValue(val);
    }, data)

    return (
        <>
            <div className="pt-6">
                <Hero></Hero>
                <Banner></Banner>
                <Products value={value}></Products>
            </div>
        </>
    );
};

export default Home;