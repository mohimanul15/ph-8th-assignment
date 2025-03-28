import { useState } from "react";


const useTitle = (customTitle = '') =>{

    const [title, setTitle] = useState(customTitle);

    const defaultTitle = titleString =>{

        setTitle(titleString);

    }

    document.title = title;

    return [title, defaultTitle];

}


export default useTitle;
