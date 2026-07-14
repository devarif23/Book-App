import book from "../../assets/books.jpg";
const Banner = () => {
    return (
        <div className="my-10">
            <div className="hero md:py-20 md:px-16 bg-amber-100">
                <div className=" md:flex items-center gap-10 lg:flex-row-reverse     ">
                    <img
                        src={book}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div className="md:space-y-6">
                        <h1 className="text-5xl font-bold md:space-y-14">Books to freshen up your bookshelf</h1>
                        {/* <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p> */}
                        <button className="btn bg-green-600 text-white">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;