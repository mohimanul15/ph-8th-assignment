const SingleCartItem = ({cart_item,RemoveFromCart}) => {

    // console.log(cart_item);

    const {
        product_id: p_id,
        description: des,
        price,
        product_image: image,
        product_title: title,
        specification,
        category: cat,
        availability: isAvai,
        rating,
        cart_count: count,
        total_price:t_price
    } = cart_item;


    return (
        <div>
            <div className="w-full px-4 py-2 bg-white rounded-xl">
            <div className="flex justify-between items-center">
                
                <div className="flex gap-4 items-center">
                    <div>
                        <img src={image} className="w-24 h-auto rounded-xl"/>
                    </div>

                    <div className="text-start">
                        <h3 className="font-semibold text-base lg:text-2xl text-main-100">{title}</h3>
                        <p className="font-normal text-base text-main-70 mt-1">{des}</p>
                        <p className="mt-1">${price} × {count} = ${t_price}</p>
                    </div>
                </div>

                <div>
                    <button onClick={()=>RemoveFromCart(p_id)}>
                        <svg width="24" height="24" viewBox="0 0 24 24"   fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.74 9.00003L14.394 18M9.606 18L9.26 9.00003M19.228 5.79003C19.57 5.84203 19.91 5.89703 20.25 5.95603M19.228 5.79003L18.16 19.673C18.1164 20.2383 17.8611 20.7662 17.445 21.1513C17.029 21.5364 16.4829 21.7502 15.916 21.75H8.084C7.5171 21.7502 6.97102 21.5364 6.55498 21.1513C6.13894 20.7662 5.88359 20.2383 5.84 19.673L4.772 5.79003M19.228 5.79003C18.0739 5.61555 16.9138 5.48313 15.75 5.39303M4.772 5.79003C4.43 5.84103 4.09 5.89603 3.75 5.95503M4.772 5.79003C5.92613 5.61555 7.08623 5.48313 8.25 5.39303M15.75 5.39303V4.47703C15.75 3.29703 14.84 2.31303 13.66 2.27603C12.5536 2.24067 11.4464 2.24067 10.34 2.27603C9.16 2.31303 8.25 3.29803 8.25 4.47703V5.39303M15.75 5.39303C13.2537 5.20011 10.7463 5.20011 8.25 5.39303" stroke="#F14749" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>

            </div>
        </div>

        </div>
    );
};

export default SingleCartItem;