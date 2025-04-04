import { useLoaderData } from "react-router";
import useTitle from "../../../Utilities/CustomHook/useTitle";
import { GetLocalStorageCart, UpdateCart } from "../../../Utilities/Cart/Cart";
import SingleCartItem from "./SingleCartItem/SingleCartItem";
import { useContext } from "react";
import { CartDataContext } from "../../../App";

const Cart = () => {

    useTitle('Dashboard -> Cart: Gadget Heaven');

    const { setCartItem } = useContext(CartDataContext);

    const allProduct = useLoaderData().products;

    const cartIdFromLocal = GetLocalStorageCart();

    let updateProductsInfo = [];

    let cart_total = 0;

    if (cartIdFromLocal.length > 0) {

        const cartProduct = allProduct.filter(ele => cartIdFromLocal.includes(ele.product_id));

        updateProductsInfo = cartProduct.map(ele => {
            const count = cartIdFromLocal.filter(val => val === ele.product_id).length;

            ele['total_price'] = ele.price * count;

            ele['cart_count'] = count;

            cart_total += ele.total_price;

            return ele;
        })

        // console.log(updateProductsInfo);

    }

    const RemoveFromCart = pro_id => {
        UpdateCart(pro_id);

        setCartItem(GetLocalStorageCart().length);
        // console.log(p_id);
    }


    return (
        <div className="max-w-5xl mx-auto">

            <div className="py-8 mx-3 flex items-center justify-between flex-wrap">
                <div>
                    <h1 className="font-bold text-lg lg:text-2xl">Cart</h1>
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                    <h1 className="font-bold text-lg lg:text-2xl">Total Cost: ${cart_total}</h1>

                    <div className="border-2 w-fit rounded-4xl border-purple-600">
                        <button className="px-2 py-1 lg:px-5 lg:py-3 text-main text-base lg:text-lg font-semibold flex gap-3">
                            Sort by Price
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_13_2554)">
                                    <path d="M4 10C4 10.5304 4.21071 11.0391 4.58579 11.4142C4.96086 11.7893 5.46957 12 6 12C6.53043 12 7.03914 11.7893 7.41421 11.4142C7.78929 11.0391 8 10.5304 8 10C8 9.46957 7.78929 8.96086 7.41421 8.58579C7.03914 8.21071 6.53043 8 6 8C5.46957 8 4.96086 8.21071 4.58579 8.58579C4.21071 8.96086 4 9.46957 4 10Z" stroke="#8332C5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 4V8" stroke="#8332C5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 12V20" stroke="#8332C5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 16C10 16.5304 10.2107 17.0391 10.5858 17.4142C10.9609 17.7893 11.4696 18 12 18C12.5304 18 13.0391 17.7893 13.4142 17.4142C13.7893 17.0391 14 16.5304 14 16C14 15.4696 13.7893 14.9609 13.4142 14.5858C13.0391 14.2107 12.5304 14 12 14C11.4696 14 10.9609 14.2107 10.5858 14.5858C10.2107 14.9609 10 15.4696 10 16Z" stroke="#8332C5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 4V14" stroke="#8332C5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 18V20" stroke="#8332C5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16 7C16 7.53043 16.2107 8.03914 16.5858 8.41421C16.9609 8.78929 17.4696 9 18 9C18.5304 9 19.0391 8.78929 19.4142 8.41421C19.7893 8.03914 20 7.53043 20 7C20 6.46957 19.7893 5.96086 19.4142 5.58579C19.0391 5.21071 18.5304 5 18 5C17.4696 5 16.9609 5.21071 16.5858 5.58579C16.2107 5.96086 16 6.46957 16 7Z" stroke="#8332C5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18 4V5" stroke="#8332C5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18 9V20" stroke="#8332C5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_13_2554">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>

                    <button className="rounded-4xl px-3 py-1.5 lg:px-6 lg:py-3 bg-main text-base text-white lg:text-lg font-medium flex gap-3">
                        Purchase
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-4 mx-3">
                {
                    cartIdFromLocal.length > 0 ?
                        updateProductsInfo.map(ele => <SingleCartItem key={ele.product_id} cart_item={ele} RemoveFromCart={RemoveFromCart}></SingleCartItem>) :
                        ''
                }
            </div>
        </div>
    );
};

export default Cart;