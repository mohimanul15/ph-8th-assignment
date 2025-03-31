import { useEffect, useState } from "react";
import CategoryView from "./ProViews/CategoryView/CategoryView";
import SingleCard from "./ProViews/SingleCard/SingleCard";

const Products = ({ value: allData }) => {

    const [init, setInit] = useState(false);

    const [value, setValue] = useState([]);

    useEffect(()=>{
        if(!init){
            setValue(allData);
        }
        if(value.length > 0){
            setInit(true);
        }
    })

    const categoryAll = allData.map(ele => ele.category);

    const category = [...new Set(categoryAll)];



    const changeData = data => {

        let itemsData = [];

        if (data === 'All Products') {
            setValue(allData);
        } else {
            itemsData = allData.filter(elem => elem.category.includes(data));
            setValue(itemsData);
        }

    }


    const handleCurrentData = clickedData => {
        resetClass();

        changeData(clickedData.target.innerText);

        clickedData.target.classList.replace('bg-[#09080F15]', 'bg-main')
        clickedData.target.classList.replace('text-[#09080FAA]', 'text-white');

    }

    const resetClass = () => {
        const clsData = document.getElementsByClassName('temp_adder');
        for (const cls of clsData) {
            cls.classList.replace('bg-main', 'bg-[#09080F15]');
            cls.classList.replace('text-white', 'text-[#09080FAA]');
        }
    }


    return (
        <>
            <div className="container mx-auto text-center mt-8 md:mt-18">
                <h2 className="text-base md:text-2xl lg:text-4xl font-bold text-text_primary">
                    Explore Cutting-Edge Gadgets
                </h2>

                <div className="mt-8 flex gap-5 flex-col md:flex-row">

                    <div className="max-h-fit p-2 md:p-6 bg-white rounded-2xl flex flex-col  gap-5 flex-1/3 lg:flex-1/5 mx-2">

                        <button className="bg-main text-white px-7 py-4 text-left font-medium text-sm md:text-lg rounded-4xl min-w-full temp_adder" onClick={handleCurrentData}>
                            All Products
                        </button>

                        {
                            category.map((listData, idk) => {
                                return <CategoryView key={idk} catList={listData} clickFunc={handleCurrentData}></CategoryView>
                            })
                        }

                    </div>

                    <div className="flex-2/3 lg:flex-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">

                        {
                            value.map((singleProd, idk) => {

                                return <SingleCard
                                    key={idk}
                                    prodList={singleProd}>
                                </SingleCard>
                            })
                        }

                    </div>

                </div>

            </div>
        </>
    );
};

export default Products;