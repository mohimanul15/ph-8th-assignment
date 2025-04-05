import { Bounce, toast } from "react-toastify"

const warn_toast = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
};

const AlreadyInWishToast = () => {
    toast.info('Already In your Wishlist', warn_toast);
}

const AddedToYourWishlistToast = () => {
    toast.success('Product has been added to your Wishlist', warn_toast);
}

const AddedToCartToast = () => {
    toast.success('Product has been successfully added to your cart', warn_toast);
}

const CannotAddToCartToast = () => {
    toast.info('This Product currently not available, Try to add on your wishlist', warn_toast);
}

const Amount1000WarnToast = () => {
    toast.warn('Can not add worth $ 1000 on your cart, Try to purchase or delete some on your cart',warn_toast);
}

const RemoveFromWishToast = () => {
    toast.info('Product removed from your wish list',warn_toast);
}

const RemoveFromCartToast = () => {
    toast.info('Product Removed from Cart',warn_toast);
}

export {
    AlreadyInWishToast,
    AddedToYourWishlistToast,
    AddedToCartToast,
    CannotAddToCartToast,
    Amount1000WarnToast,
    RemoveFromWishToast,
    RemoveFromCartToast
};