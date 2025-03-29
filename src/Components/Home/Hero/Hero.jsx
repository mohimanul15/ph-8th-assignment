import { useNavigate } from "react-router";
import Header from "../../Header/Header"

const Hero = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="bg-main rounded-4xl shadow-2xl shadow-main m-2 container mx-auto pb-30 md:pb-55">
                <Header colorPalete={'white'}></Header>

                <div className="flex items-center justify-center py-10 gap-6 flex-col max-w-6xl px-4 text-center mx-auto">
                    <h1 className="font-bold text-lg sm:text-2xl md:text-4xl lg:text-6xl text-white">
                        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                    </h1>
                    <p className="font-normal text-xs md:text-base max-w-3xl px-4 text-white">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <button 
                        className="rounded-4xl bg-white text-main font-bold text-sm md:text-xl py-4 px-7 hover:animate-pulse"
                        onClick={()=>navigate('/dashboard')}
                    >
                        Shop Now
                    </button>
                </div>
            </div>
        </>
    );
};

export default Hero;