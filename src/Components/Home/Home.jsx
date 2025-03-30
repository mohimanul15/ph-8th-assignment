import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Hero from "./Hero/Hero";

const Home = () => {
    return (
        <div className="pt-6">
            <Hero></Hero>   
            <Banner></Banner>
            <Products></Products>  
        </div>
    );
};

export default Home;