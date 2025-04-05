import { useContext, useEffect } from "react";
import useTitle from "../../../Utilities/CustomHook/useTitle";
import { CalculateTotalInCart, GetLocalStorageCart, GetLocalStorageWish, SetLocalStorageCart, UpdateWish } from "../../../Utilities/Cart/Cart";
import { useLoaderData } from "react-router";
import SingleWishItem from "./SingleWishItem/SingleWishItem";
import { CartDataContext } from "../../../App";
import { AddedToCartToast, Amount1000WarnToast, CannotAddToCartToast, RemoveFromWishToast } from "../../../Utilities/ToastPop/ToastPop";
import { Bounce, ToastContainer } from "react-toastify";

const Wish = () => {

    const [title, setTitle]= useTitle('Dashboard -> Wishlist: Gadget Heaven');

    const {setCartItem,setWishItem} = useContext(CartDataContext);

    useEffect(()=>{
        setTitle('Dashboard -> Wishlist: Gadget Heaven')
    })

    const allProduct = useLoaderData().products;

    const wishIdFromLocal = GetLocalStorageWish();

    let updateProductsInfo = [];

    if (wishIdFromLocal.length > 0) {

        const wishProduct = allProduct.filter(ele => wishIdFromLocal.includes(ele.product_id));

        updateProductsInfo = wishProduct.map(ele => {
            const count = wishIdFromLocal.filter(val => val === ele.product_id).length;

            ele['total_price_wish'] = ele.price * count;

            ele['wish_count'] = count;

            return ele;
        })

    }

    const RemoveFromWish = pro_id=>{
        UpdateWish(pro_id);
        setWishItem(GetLocalStorageWish().length);
        RemoveFromWishToast();
    }

    const handleCartClick = (pro_id,price,isAvai=true) => {

        // console.log(CalculateTotalInCart(newData) + price > 1000);
        if(CalculateTotalInCart(allProduct) + price > 1000){
            Amount1000WarnToast();
        }
        else if (isAvai) {
            SetLocalStorageCart(pro_id);
            const data = GetLocalStorageCart().length;
            setCartItem(data);
            RemoveFromWish(pro_id);
            AddedToCartToast();
        }else{
            CannotAddToCartToast();
        }
    }


    return (
        <div className="max-w-5xl mx-auto">

            <div className="py-8 mx-3 flex justify-baseline">
                <div>
                    <h1 className="font-bold text-lg lg:text-2xl">Wishlist</h1>
                </div>
            </div>

            <div className="flex flex-col gap-4 mx-3">
                {
                    wishIdFromLocal.length > 0 ?
                        updateProductsInfo.map(ele => <SingleWishItem 
                            key={ele.product_id} 
                            wish_item={ele} 
                            RemoveFromWish={RemoveFromWish} handleCartClick={handleCartClick}></SingleWishItem>) :
                        ''
                }
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
        </div>
    );
};

export default Wish;