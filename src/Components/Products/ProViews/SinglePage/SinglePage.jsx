import { useLoaderData, useParams } from "react-router";
import { useEffect, useState } from "react";
import { loadEnv } from "vite";

const SinglePage = () => {
    const newData = useLoaderData().products;
    const prop = useParams().prodId;
    
    console.log(newData,prop);

    return (
        <>
            <h2 className="text-7xl"></h2>
        </>
    );
};

export default SinglePage;