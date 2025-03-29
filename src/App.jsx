import { useEffect } from "react";
import useTitle from "./Utilities/CustomHook/useTitle";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router";

function App() {

  const [title, setTitle] = useTitle('Gadget Heaven Home');

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>

    </>
  )
}

export default App;
