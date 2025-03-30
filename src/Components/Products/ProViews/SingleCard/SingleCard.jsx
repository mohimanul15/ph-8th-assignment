const SingleCard = ({ prodList }) => {

    const { product_image: image,
        product_title: name,
        product_id: id,
        price } = prodList;

    console.log(prodList);

    return (
        <div className="text-left p-5 bg-white rounded-2xl">

            <div className="bg-[#d9d9d9] rounded-xl">

                <img src={image} alt="" className="mix-blend-multiply max-h-[215px] w-auto m-auto" />

            </div>

            <h3 className="font-bold text-base">{name}</h3>
            <h2 className="font-medium text-sm">$ {price}</h2>
        </div>
    );
};

export default SingleCard;