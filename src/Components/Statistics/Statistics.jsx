import { useEffect } from "react";
import useTitle from "../../Utilities/CustomHook/useTitle";

const Statistics = () => {

    const [title,setTitle] = useTitle('Statistics: Gadget Heaven');

    useEffect(()=>{
        setTitle('Statistics: Gadget Heaven');
    })

    return (
        <div>
            <h2>I am statistics</h2>            
        </div>
    );
};

export default Statistics;