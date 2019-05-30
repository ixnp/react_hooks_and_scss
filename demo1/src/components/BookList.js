import React from "react";
import Book from "./Book";

const BookList = (props) => {
    return (
        <div>
            <ul>
                {props.books.map((book,index)=> {
                    return <Book book={book} key=
                        {index} />
                    }
                )}
            </ul>
        </div>
    )
}
export default BookList;