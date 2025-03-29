import { useEffect } from "react";
import useTitle from "./Utilities/CustomHook/useTitle";
import Header from "./Components/Header/Header";
import { Outlet, useLocation, useNavigate, useNavigation } from "react-router";

function App() {

  const [title, setTitle] = useTitle('Gadget Heaven Home');

  return (
    <>
      {
        useLocation().pathname !== '/'?
        <Header></Header>:
        ''
      }
      <Outlet></Outlet>

    </>
  )
}

export default App;
