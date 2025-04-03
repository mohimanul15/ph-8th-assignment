const RemoveItemFromCart = pro_id =>{
    let cartData = localStorage.getItem('Cart');
    
    cartData = JSON.parse(cartData);

    cartData = cartData.filter(ele=>ele!==pro_id);

    localStorage.setItem('Cart',JSON.stringify(cartData));
}


const RemoveItemFromWish = pro_id =>{
    let wishData = localStorage.getItem('Wish');

    wishData = JSON.parse(wishData);

    wishData = wishData.filter(ele=>ele!== pro_id);

    localStorage.setItem('Wish', JSON.stringify(wishData));
}


export {RemoveItemFromCart, RemoveItemFromWish}