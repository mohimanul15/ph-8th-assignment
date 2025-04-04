function SetLocalStorageCart(data = null) {
    let StorageData = [];
    if (!localStorage.getItem('Cart')) {
        StorageData.push(data);
        localStorage.setItem('Cart', JSON.stringify(StorageData));

    } else {
        StorageData = JSON.parse(localStorage.getItem('Cart'));
        StorageData.push(data);
        localStorage.setItem('Cart', JSON.stringify(StorageData));
    }
}

function GetLocalStorageCart() {
    let StorageData = [];
    const defCart = localStorage.getItem('Cart');

    if (defCart !== null && defCart.length > 0) {
        StorageData = JSON.parse(defCart);
        return StorageData;
    } else {
        return [];
    }
}

function SetLocalStorageWish(data = null) {
    let StorageData = [];
    if (!localStorage.getItem('Wish')) {
        StorageData.push(data);
        localStorage.setItem('Wish', JSON.stringify(StorageData));

    } else {
        StorageData = JSON.parse(localStorage.getItem('Wish'));
        StorageData.push(data);
        localStorage.setItem('Wish', JSON.stringify(StorageData));
    }
}

function GetLocalStorageWish() {
    let StorageData = [];

    const defWish = localStorage.getItem('Wish');

    if (defWish !== null && defWish.length > 0) {
        StorageData = JSON.parse(defWish);
        return StorageData;
    } else {
        return [];
    }
}


function CalculateTotalInCart(allProduct) {

    const cartIdFromLocal = GetLocalStorageCart();

    let cart_total = 0;

    if (cartIdFromLocal.length > 0) {

        const cartProduct = allProduct.filter(ele => cartIdFromLocal.includes(ele.product_id));

        const totalPrice = cartProduct.map(ele => {
            const count = cartIdFromLocal.filter(val => val === ele.product_id).length;

            ele['total_price'] = ele.price * count;

            ele['total_cart'] = count;

            cart_total += ele.total_price;

            return ele;
        })

    }

    return cart_total;
}


function UpdateCart(p_id){
    const cartPrev = GetLocalStorageCart();

    if(cartPrev.length>1){
        const newCart = cartPrev.filter(ele=> ele !== p_id);
        localStorage.setItem('Cart', JSON.stringify(newCart));
    }else{
        localStorage.removeItem('Cart');
    }
}

export { SetLocalStorageCart, GetLocalStorageCart, SetLocalStorageWish, GetLocalStorageWish, CalculateTotalInCart,UpdateCart}