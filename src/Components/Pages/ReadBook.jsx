import { useEffect, useState } from "react";
import { getBooks } from "../Utilites";
import SingleReadBook from "./SingleReadBook";
import { IoIosArrowDown } from "react-icons/io";

const ReadBook = () => {
  const [books, setBooks] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);

  useEffect(() => {
    const stroedBooks = getBooks();
    setBooks(stroedBooks);
    setDisplayBooks(stroedBooks);
  }, []);
  const handleBook = () => {
    let sortByRating = books;
    sortByRating.reverse();
    setDisplayBooks(sortByRating);
  };
  console.log(displayBooks);
  return (
    <div>
      <div className="text-center w-full py-4">
        <details className="dropdown ">
          <summary className="m-1 btn bg-green-500 font-semibold text-xl">
            Sort By <IoIosArrowDown></IoIosArrowDown>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 font-semibold">
            <li onClick={handleBook}>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of Pages</a>
            </li>
            <li>
              <a>Publisher Year</a>
            </li>
          </ul>
        </details>
      </div>
      {displayBooks.map((book) => (
        <SingleReadBook key={book.bookId} book={book}></SingleReadBook>
      ))}
    </div>
  );
};

export default ReadBook;
