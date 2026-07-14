// import { use } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";
// { booksPromise }
const Book = ({ singleBook }) => {
    // const bookData = use(booksPromise)
    console.log(singleBook);

    const { bookName, bookId, publisher, image, rating, category, tags } = singleBook;

    return (
        <>
            {/* {
                bookData.map(bookData => (
                    <h1>name{bookData.bookName}</h1>
                ))
            } */}


            {/* ========================================== */}

            <Link to={`/bookDetails/${bookId}`}>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="bg-gray-50">
                        <img
                            className="h-75 p-8"
                            src={image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">



                        <div className="flex gap-48">
                            {
                                tags.map(tag => <button>{tag}</button>)
                            }
                        </div>

                        <h2 className="card-title">
                            {bookName}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <span className="flex justify-start py-4"><p className="font-bold">Book By </p> {publisher}</span>
                        <div className="border-t-2 border-dashed border-gray-300">

                        </div>
                        <div className="card-actions flex justify-between ">
                            <div className="">{category}</div>
                            <div className=" flex items-center gap-2">{rating} <FaStarHalfAlt className="text-yellow-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            
        </>
    );
};

export default Book;