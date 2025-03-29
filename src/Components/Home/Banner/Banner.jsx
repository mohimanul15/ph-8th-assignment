import BannerImg from '../../../assets/banner.jpg';

const Banner = () => {
    return (
        <div className='container mx-auto -mt-36 md:-mt-55 px-4'>
            <div className='max-w-2xl lg:max-w-4xl p-3 lg:p-6 outline-3 rounded-3xl outline-[#ffffffBB] bg-[#ffffff40] mx-auto'>
                <img src={BannerImg} alt="Banner image" className='rounded-3xl'/>
            </div>            
        </div>
    );
};

export default Banner;