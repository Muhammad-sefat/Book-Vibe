import { useEffect, useState } from "react";
import { getBooks1 } from "../Utilites";
import SingleReadBook from "./SingleReadBook";

const WishlistBook = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const stroedBooks = getBooks1();
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

export default WishlistBook;
