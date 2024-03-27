import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
const ListedBooks = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="p-5 md:px-10">
      <div className="border flex justify-center  bg-gray-200 p-5 rounded-md">
        <h1 className="text-2xl font-bold">Books</h1>
      </div>
      <div className=" text-center py-3">
        <NavLink to={"/review"}>
          <button className="btn text-xl font-semibold">
            Give Your Review
          </button>
        </NavLink>
      </div>
      <div className="flex items-start overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800 py-5">
        <Link
          to={""}
          onClick={() => setIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            index === 0 ? "border-2 border-b-0 font-semibold" : "border-b"
          } dark:border-gray-600 dark:text-gray-600 rounded-md`}
        >
          <span>Read Books</span>
        </Link>
        <Link
          to={"wishlistbook"}
          onClick={() => setIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            index === 1 ? "border-2 border-b-0 font-semibold" : "border-b"
          } dark:border-gray-600 dark:text-gray-600 rounded-md`}
        >
          <span>Wishlist Books</span>
        </Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
