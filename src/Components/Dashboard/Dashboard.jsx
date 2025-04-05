import { useState } from "react";
import useTitle from "../../Utilities/CustomHook/useTitle";
import './Dashboard.css';
import { Outlet, useNavigate } from "react-router";

const Dashboard = () => {
    const navigate = useNavigate();
    useTitle('Dashboard: Gadget Heaven');

    const [select, setSelect] = useState(true);

    const handleBtnClick = pageSelect => {
        let cartPage = '/dashboard/cart';
        let wishPage = '/dashboard/wishlist';

        let page = pageSelect?cartPage:wishPage;

        setSelect(pageSelect);

        navigate(page);
    }



    return (
        <>

            <div className="bg-main py-5">
                <div className="container mx-auto text-center">
                    <h2 className="font-bold text-xl md:text-3xl text-white">Dashboard</h2>
                    <p className="font-light text-xs md:text-base text-white max-w-2xl mx-auto mt-4 px-2">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>

                <div className="text-base md:text-lg flex mt-4 gap-4 justify-center flex-wrap">
                    <div>
                        <button className={`rounded-4xl px-5 sm:px-16 py-1 sm:py-3 ${select ? 'btn_toggle_active' : 'btn_toggle_inactive'}`} onClick={()=>handleBtnClick(true)}>Cart</button>
                    </div>

                    <div>
                        <button className={`rounded-4xl px-5 sm:px-16 py-1 sm:py-3 ${!select ? 'btn_toggle_active' : 'btn_toggle_inactive'}`} onClick={()=>handleBtnClick(false)}>Wishlist</button>
                    </div>
                </div>
            </div>

            <Outlet></Outlet>

        </>
    );
};

export default Dashboard;