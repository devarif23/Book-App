import { createBrowserRouter } from "react-router";


import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";

import Root from "../pages/Root/Root";
import ListedBooks from "../pages/Listed Books/ListedBooks";
import BookDetails from "../pages/BookDetails/BookDetails";
export const router = createBrowserRouter([
    {
        path: "/",
        element:<Root/>,
        errorElement: <Error/>,
        children:[
            {
                index:true,
                path: "/",
                loader:()=>fetch('booksData.json'),
                element:<Home/>
            },
            {
                path:"/listed-books",
                element: <ListedBooks/>
            },
            {
                path:'/bookDetails/:id',
                loader: () => fetch('./booksData.json'),
                element: <BookDetails/>
            }
        ]
    },




    
]);