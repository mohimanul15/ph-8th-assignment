import { createContext, useEffect, useState } from "react";
import useTitle from "./Utilities/CustomHook/useTitle";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet, useLocation, useNavigate, useNavigation } from "react-router";
import { GetLocalStorageCart, GetLocalStorageWish } from "./Utilities/Cart/Cart";

export const CartDataContext = createContext(0);

function App() {

  const [cartItem, setCartItem] = useState(GetLocalStorageCart().length);
  const [wishItem, setWishItem] = useState(GetLocalStorageWish().length);
  const [getTotal, setGetTotal] = useState(0);

  useEffect(()=>{
    setCartItem(GetLocalStorageCart().length);
    setWishItem(GetLocalStorageWish().length);
  })
  
  const [title, setTitle] = useTitle('Gadget Heaven Home');


  return (
    <>
      <CartDataContext.Provider 
        value={{cartItem,setCartItem,wishItem,setWishItem,getTotal,setGetTotal}}>
        {
          useLocation().pathname !== '/' ?
            <Header></Header> :
            ''
        }
        <Outlet></Outlet>
        <Footer></Footer>
      </CartDataContext.Provider>
    </>
  )
}

export default App;
