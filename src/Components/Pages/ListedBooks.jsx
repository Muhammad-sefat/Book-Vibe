import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const ListedBooks = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="p-5 md:px-10">
      <div className="border flex justify-center  bg-gray-200 p-5 rounded-md">
        <h1 className="text-2xl font-bold">Books</h1>
      </div>
      <div className="text-center w-full py-4">
        <details className="dropdown ">
          <summary className="m-1 btn bg-lime-500 font-semibold text-xl">
            Sort By <IoIosArrowDown></IoIosArrowDown>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 font-semibold">
            <li>
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
      <div className="flex items-start overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800 py-5">
        <a
          onClick={() => setIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            index === 0 ? "border-2 border-b-0 font-semibold" : "border-b"
          } dark:border-gray-600 dark:text-gray-600 rounded-md`}
        >
          <span>Read Books</span>
        </a>
        <a
          onClick={() => setIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            index === 1 ? "border-2 border-b-0 font-semibold" : "border-b"
          } dark:border-gray-600 dark:text-gray-600 rounded-md`}
        >
          <span>Wishlist Books</span>
        </a>
      </div>
    </div>
  );
};

export default ListedBooks;
