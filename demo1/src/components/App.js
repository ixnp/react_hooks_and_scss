import React, {useState, useEffect} from "react";
import BookList from "./BookList"
const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = () => {
      fetch('http://localhost:3005/books')
      .then(res => res.json())
      .then(data => setBooks(data))
  }
  useEffect(() => {
fetchBooks()
  },[])
  console.log(books)
  
        return(
            <div>
                <BookList books={books}/>
            </div>
        )
}

export default App;
