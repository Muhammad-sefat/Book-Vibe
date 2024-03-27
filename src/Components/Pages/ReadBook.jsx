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
    let sortByRating = [...books];
    sortByRating.sort((p1, p2) =>
      p1.rating < p2.rating ? 1 : p1.rating > p2.rating ? -1 : 0
    );
    setDisplayBooks(sortByRating);
  };
  const handleBook1 = () => {
    let sortByRating = [...books];
    sortByRating.sort((p1, p2) =>
      p1.yearOfPublishing < p2.yearOfPublishing
        ? 1
        : p1.yearOfPublishing > p2.yearOfPublishing
        ? -1
        : 0
    );
    setDisplayBooks(sortByRating);
  };
  const handleBook2 = () => {
    let sortByRating = [...books];
    sortByRating.sort((p1, p2) =>
      p1.totalPages < p2.totalPages ? 1 : p1.totalPages > p2.totalPages ? -1 : 0
    );
    setDisplayBooks(sortByRating);
  };
  return (
    <div>
      <div className="text-center w-full py-4">
        <details className="dropdown ">
          <summary className="m-1 btn bg-green-500 font-semibold text-xl">
            Sort By <IoIosArrowDown></IoIosArrowDown>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 font-semibold">
            <li onClick={() => handleBook()}>
              <a>Rating</a>
            </li>
            <li onClick={handleBook2}>
              <a>Number of Pages</a>
            </li>
            <li onClick={handleBook1}>
              <a>Publisher Year</a>
            </li>
          </ul>
        </details>
      </div>
      {handleBook &&
        displayBooks.map((book) => (
          <SingleReadBook key={book.bookId} book={book}></SingleReadBook>
        ))}
    </div>
  );
};

export default ReadBook;
