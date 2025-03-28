import { useEffect } from "react";
import useTitle from "./Utilities/CustomHook/useTitle";
import Header from "./Components/Header/Header";

function App() {

  const [title, setTitle] = useTitle('Gadget Heaven Home');

  return (
    <>
      <Header></Header>

    </>
  )
}

export default App;
