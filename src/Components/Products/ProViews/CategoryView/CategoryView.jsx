const CategoryView = ({catList,clickFunc}) => {

    return (
        <div>
            <button className="bg-[#09080F15] text-[#09080FAA] px-7 py-4 text-left font-medium text-sm md:text-lg rounded-4xl min-w-full temp_adder" onClick={clickFunc}>
                {catList}
            </button>         
        </div>
    );
};

export default CategoryView;