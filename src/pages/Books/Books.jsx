import { Suspense} from "react";
import Book from "../Book.jsx/Book";


const Books = ({data}) => {

    // console.log(data);
    
    // const [books, setBooks] = useState([]);


    /* api calll method 1  */

    // useEffect(() => {
    //     fetch("booksData.json")
    //         .then((res) => res.json())
    //         .then((data) => setBooks(data));
    // }, []); 

    /* api call method 2  */

    // const booksPromise = fetch('./booksData.json').then(res=>res.json())



    return (
        <div>
            <h1 className="text-center font-bold text-3xl my-4">Books</h1>
            <Suspense fallback={<span>loading ................. </span>}>
                {/* <Book booksPromise={booksPromise}></Book> */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        data.map((singleBook) => <Book key={singleBook.Id} singleBook={singleBook}></Book>)
                    }
               </div>
            </Suspense>
        </div>
    );
};

export default Books;