import { NavLink } from "react-router";

const SingleCard = ({ prodList }) => {

    const { product_image: image,
        product_title: name,
        product_id: id,
        price,
        rating } = prodList;

    const ratingInt = rating - 1;

    let rateData = [];

    let i = 0;

    while (i < 5) {
        rateData.push(<input name="rating-2" key={i} className={`mask mask-star bg-orange-400 ${ratingInt >= i ? 'opacity-100' : ''}`} aria-label={`${i + 1} star`} />);
        i++;
    }

    // console.log(prodList);

    return (
        <div className="text-left p-5 bg-white rounded-2xl flex flex-col">

            <div className="bg-[#d9d9d9] rounded-xl mb-6">

                <img src={image} alt="" className="mix-blend-multiply max-h-[215px] w-auto m-auto" />

            </div>

            <div className="grow flex flex-col justify-end gap-3">

                <h3 className="font-semibold text-base md:text-lg lg:text-2xl text-text_secondary">{name}</h3>

                <h2 className="font-medium text-sm md:text-base lg:text-xl text-text_secondary opacity-60">Price: {price} TK</h2>

            </div>

            <div className="mt-4 flex flex-col xl:flex-row justify-between xl:items-center">
                <div className="border-2 w-fit rounded-4xl border-purple-600">
                    <NavLink to={`/products/${id}`}>
                        <button className="px-2 py-1 lg:px-5 lg:py-3 text-main text-base lg:text-lg font-semibold">
                            View Detail
                        </button>
                    </NavLink>
                </div>

                <div className="mt-2">
                    <div className="rating">
                        {rating} {rateData}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleCard;