import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {

    const [value, setValue] = useState([])

    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=> setValue(res.data));

    },[])

    return (
        <div>
            
        </div>
    );
};

export default Products;