import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { getBooks, saveBook, saveBook1 } from "../Utilites";
import toast from "react-hot-toast";

const Book = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const singleBook = books.find((book) => book.bookId == id);
  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = singleBook;
  const handleStroed = (singleBook) => {
    saveBook(singleBook);
  };
  const handleStroed1 = (singleBook) => {
    const stroedData = getBooks();
    const isExist = stroedData.find((d) => d.bookId === singleBook.bookId);
    if (isExist) {
      return toast.error("Already Read This Book!");
    }
    saveBook1(singleBook);
  };
  return (
    <div className="px-10 mx-auto">
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center  sm:py-12 lg:py-24 lg:flex-row lg:justify-center gap-6">
          <img
            src={image}
            className="object-contain sm:h-80 lg:h-96 xl:h-112 2xl:h-128 w-[100vh] h-[100vh] bg-gray-200 p-5 rounded-md"
          />
          <div className="rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-3xl font-bold leading-none sm:text-6xl py-3">
              {bookName}
            </h1>
            <p className="pb-2 font-medium">By : {author}</p>
            <hr />
            <p className="py-2 font-medium">{category}</p>
            <hr />
            <p className="py-2">
              <span className="font-bold">Review</span> : {review}
            </p>
            <div className="flex flex-wrap py-3 gap-2 border-t border-dashed dark:border-gray-600">
              <span className="font-bold"> Tag:</span>
              {tags.map((tag) => (
                <a
                  key={tag.id}
                  className="mx-auto px-4 rounded-xl hover:underline text-green-600 font-bold bg-green-100"
                >
                  #{tag}
                </a>
              ))}
            </div>
            <hr />
            <div className="space-y-3">
              <div>
                Number Of Pages :{" "}
                <span className="font-bold">{totalPages}</span>
              </div>
              <div>
                Publisher : <span className="font-bold">{publisher}</span>
              </div>
              <div>
                Year of Publishing :{" "}
                <span className="font-bold">{yearOfPublishing}</span>
              </div>
              <div>
                Rating : <span className="font-bold">{rating}</span>
              </div>
            </div>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start pt-3">
              <NavLink
                onClick={() => handleStroed(singleBook)}
                className="px-5 py-3 text-lg border font-semibold rounded dark:bg-violet-600 dark:text-gray-50 hover:bg-green-500"
              >
                Read
              </NavLink>
              <NavLink
                onClick={() => handleStroed1(singleBook)}
                className="px-5 py-3 text-lg font-semibold border rounded dark:border-gray-800 hover:bg-blue-400"
              >
                Wishlist
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Book;
