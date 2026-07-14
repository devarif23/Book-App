import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/AddToDB";


const BookDetails = () => {
    const { id } = useParams()
    const bookId = parseInt(id)
    const data = useLoaderData()
    const singleBook = data.find(book => book.bookId === bookId)
    // console.log(typeof (bookId), data);
    // console.log(singleBook);

    const { bookName, image, review, tags } = singleBook;

    const handleMarkAsRead = (id) =>{
        addToStoredDB(id)
    }

    return (
        <div>
            <h1 className="text-center my-5 bg-gray-600 py-4">Book Details</h1>


            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="w-[500px] " ><img src={image} alt=""  /></div>
                <div className="space-y-6"> 
                     <h1>name  : {bookName}</h1>
                    <button onClick={() => handleMarkAsRead(id)} className="btn btn-primary mr-4">Read me </button>
                    <button className="btn btn-secondary "> Add to wieshList </button>
                </div>



            </div>
        </div>
    );
};

export default BookDetails;