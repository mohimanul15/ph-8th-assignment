import { useEffect } from "react";
import useTitle from "../../Utilities/CustomHook/useTitle";
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useLoaderData } from "react-router";

const Statistics = () => {

    const [title, setTitle] = useTitle('Statistics: Gadget Heaven');

    useEffect(() => {
        setTitle('Statistics: Gadget Heaven');
    })

    const data = useLoaderData('/products.json').products;

    // console.log(data);

    return (
        <div>
            <div className="bg-main py-5">
                <div className="container mx-auto text-center">
                    <h2 className="font-bold text-xl md:text-3xl text-white">Statistics</h2>
                    <p className="font-light text-xs md:text-base text-white max-w-2xl mx-auto mt-4 px-2">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>
            </div>

            <section className="container mx-auto">
                <div className="my-12 mx-2">
                    <h2
                        className="text-base md:text-lg font-bold">
                        Statistics
                    </h2>
                </div>

                <div className="bg-white rounded-2xl mt-4 overflow-clip overflow-x-auto">
                    <div style={{ width: '2400px', height: 300,}}>
                        <ResponsiveContainer>
                            <ComposedChart
                                width={500}
                                height={400}
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 20,
                                    bottom: 20,
                                    left: 20,
                                }}
                            >
                                <CartesianGrid stroke="#9538e210" />
                                <XAxis dataKey="product_title" scale="band" className="text-xs flex flex-wrap"/>
                                <YAxis/>
                                <Tooltip />
                                <Legend />
                                <Area type="monotone" dataKey="price" fill="#9538e225" stroke="#9538e230" />
                                <Bar dataKey="price" barSize={20} fill="#9538e2" />
                                <Line type="monotone" dataKey="rating" stroke="#ff7300" />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Statistics;