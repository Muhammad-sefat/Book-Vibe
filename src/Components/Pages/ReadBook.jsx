import { useEffect, useState } from "react";
import { getBooks } from "../Utilites";
import SingleReadBook from "./SingleReadBook";

const ReadBook = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const stroedBooks = getBooks();
    setBooks(stroedBooks);
  }, []);
  console.log(books);
  return (
    <div>
      {books.map((book) => (
        <SingleReadBook key={book.bookId} book={book}></SingleReadBook>
      ))}
    </div>
  );
};

export default ReadBook;
