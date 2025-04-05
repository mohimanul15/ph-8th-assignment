import { useLoaderData, useParams } from "react-router";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { CalculateTotalInCart, GetLocalStorageCart, GetLocalStorageWish, SetLocalStorageCart, SetLocalStorageWish } from "../../../../Utilities/Cart/Cart";
import { CartDataContext } from "../../../../App";
import useTitle from "../../../../Utilities/CustomHook/useTitle";
import { AddedToCartToast, AddedToYourWishlistToast, AlreadyInWishToast, Amount1000WarnToast, CannotAddToCartToast } from "../../../../Utilities/ToastPop/ToastPop";
import { Bounce, ToastContainer } from "react-toastify";

const SinglePage = () => {

    const [isWish, setIsWish] = useState(false);

    const { setCartItem, setWishItem, setGetTotal, getTotal } = useContext(CartDataContext);

    const newData = useLoaderData().products;
    const prop = useParams().prodId;

    const currentProd = newData.find(prod => prod.product_id === prop);

    const {
        product_id: p_id,
        description: des,
        price,
        product_image: image,
        product_title: title,
        specification,
        category: cat,
        availability: isAvai,
        rating
    } = currentProd;



    let spec_data = [];

    for (const [key, value] of Object.entries(specification)) {
        spec_data.push(<li key={key + 'a'}>{key} : {value}</li>);
    }

    const ratingInt = rating - 1;

    let rateData = [];

    let i = 0;

    while (i < 5) {
        rateData.push(<input name="rating-1" key={i + 'sd'} className={`mask mask-star bg-orange-400 ${ratingInt >= i ? 'opacity-100' : ''}`} aria-label={`${i + 1} star`} />);
        i++;
    }

    const handleCartClick = pro_id => {

        // console.log(CalculateTotalInCart(newData) + price > 1000);
        if(CalculateTotalInCart(newData) + price > 1000){
            Amount1000WarnToast();
        }
        else if (isAvai) {
            SetLocalStorageCart(pro_id);
            const data = GetLocalStorageCart().length;
            setCartItem(data);
            AddedToCartToast();
        }else{
            CannotAddToCartToast();
        }
    }

    const handleWishClick = pro_id => {
        if (isWish) {
            AlreadyInWishToast();
        } else {
            SetLocalStorageWish(pro_id);
            const data = GetLocalStorageWish().length;
            setWishItem(data);
            AddedToYourWishlistToast();
            setIsWish(true);
        }
    }


    useEffect(() => {
        const wishList = GetLocalStorageWish();

        if (wishList.length > 0 &&
            wishList.includes(p_id)) {

            setIsWish(true);

        }

    }, [])

    // console.log(isWish);

    useTitle(title);

    return (
        <>
            <div className="bg-linear-to-b from-main from-60% to-[#ececec] to-60%">
                <div className="container mx-auto py-5 text-center">
                    <h2 className="font-bold text-xl md:text-3xl text-white">Product Details</h2>
                    <p className="font-light text-xs md:text-base text-white max-w-2xl mx-auto mt-4 px-2">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>

                <div className="p-8 rounded-3xl bg-white max-w-4xl mx-auto shadow-2xl">

                    <div className="flex flex-col sm:flex-row gap-6">
                        <div className="flex-1/3 bg-[#ececec] rounded-2xl place-content-center">
                            <img src={window.location.origin + image.substring(1)} alt="Product Image" className="mix-blend-multiply mx-auto" />
                        </div>

                        <div className="flex flex-col flex-2/3 gap-4">
                            <h2 className="font-semibold text-xl lg:text-3xl text-text_secondary">
                                {title}
                            </h2>

                            <h4 className="font-semibold text-base lg:text-xl opacity-80">
                                Price: ${price}
                            </h4>

                            <div>
                                <button className={`${isAvai ? 'bg-lime-200 border-lime-700 ' : 'bg-red-300 border-red-950 '} border-2 px-4 py-2 rounded-3xl`}>
                                    {
                                        isAvai ? 'In Stock' : 'Not Available'
                                    }
                                </button>
                            </div>

                            <p className="font-normal text-sm lg:text-lg text-text_secondary opacity-60">
                                {des}
                            </p>

                            <div className="text-sm lg:text-lg text-text_secondary">
                                <h4 className="font-bold my-2">Specifications:
                                </h4>
                                <ul className="opacity-60">
                                    {
                                        spec_data
                                    }
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-sm lg:text-lg text-text_secondary font-bold mb-2">Rating ⭐</h4>

                                <div className="rating">
                                    {rateData}
                                </div>
                                <span className="ml-2 bg-[#09080f20] py-2 px-4 rounded-4xl text-[#09080fCC] font-medium text-sm">{rating}</span>
                            </div>

                            <div className="flex gap-3 flex-wrap mt-2">

                                <div>
                                    <button 
                                        className={`${isAvai?'bg-main':'bg-gray-500'} flex items-center gap-2 py-3 px-5 rounded-4xl text-sm lg:text-lg font-bold text-white hover:animate-pulse`}
                                        onClick={() => handleCartClick(p_id)}>
                                        Add To Cart
                                        <span><BsCart3 className="text-white font-bold" /></span>
                                    </button>
                                </div>

                                <div>
                                    <button
                                        className={`border-2 border-[#09080F10] py-3 px-5 rounded-4xl`}
                                        onClick={() => handleWishClick(p_id)}>
                                        <FaRegHeart className={`${isWish ? 'text-gray-400' : ''}`} />
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}></ToastContainer>
        </>
    );
};

export default SinglePage;