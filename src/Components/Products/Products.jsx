import axios from "axios";
import { useEffect, useState } from "react";
import CategoryView from "./ProViews/CategoryView/CategoryView";
import SingleCard from "./ProViews/SingleCard/SingleCard";

const Products = () => {

    const [value, setValue] = useState([]);
    const [prods, setProds] = useState();

    useEffect(() => {

        axios.get('/products.json')
            .then(res => setValue(res.data.products))

    }, [])

    useEffect(() => {
        setProds(value)
    }, [])

    let category = value.map(data => data.category);

    category = [...new Set(category)];


    return (
        <div className="container mx-auto text-center mt-8 md:mt-18">
            <h2 className="text-base md:text-2xl lg:text-4xl font-bold text-text_primary">
                Explore Cutting-Edge Gadgets
            </h2>

            <div className="mt-8 flex gap-5">

                <div
                    className="max-h-fit p-2 md:p-6 bg-white rounded-2xl flex flex-col gap-5 flex-1/5">

                    <button className="bg-[#09080F15] text-[#09080FAA] px-7 py-4 text-left font-medium text-sm md:text-lg rounded-4xl min-w-full">
                        All Products
                    </button>

                    {
                        category.map((listData, idk) => {
                            return <CategoryView key={idk} catList={listData}></CategoryView>
                        })
                    }

                </div>

                <div className="flex-4/5 grid grid-cols-3 gap-6">

                    {
                        value.map((singleProd,idk) => {

                            return <SingleCard
                                        key={idk}
                                        prodList={singleProd}>
                                    </SingleCard>})
                    }

                </div>

            </div>

        </div>
    );
};

export default Products;