function SetLocalStorageCart(data = null){
    let StorageData = [];
    if(!localStorage.getItem('Cart')){
        StorageData.push(data);
        localStorage.setItem('Cart',JSON.stringify(StorageData));

    }else{
        StorageData = JSON.parse(localStorage.getItem('Cart'));
        StorageData.push(data);
        localStorage.setItem('Cart',JSON.stringify(StorageData));
    }
}

function GetLocalStorageCart(){
    let StorageData = [];
    StorageData = JSON.parse(localStorage.getItem('Cart'));

    return StorageData;
}

function SetLocalStorageWish(data = null){
    let StorageData = [];
    if(!localStorage.getItem('Wish')){
        StorageData.push(data);
        localStorage.setItem('Wish',JSON.stringify(StorageData));

    }else{
        StorageData = JSON.parse(localStorage.getItem('Wish'));
        StorageData.push(data);
        localStorage.setItem('Wish',JSON.stringify(StorageData));
    }
}

function GetLocalStorageWish(){
    let StorageData = [];
    StorageData = JSON.parse(localStorage.getItem('Wish'));

    return StorageData;
}

export {SetLocalStorageCart,GetLocalStorageCart,SetLocalStorageWish,GetLocalStorageWish}