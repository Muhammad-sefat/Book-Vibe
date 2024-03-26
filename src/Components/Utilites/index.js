import toast from "react-hot-toast";
export const getBooks = () => {
  let books = [];
  const stroedBooks = localStorage.getItem("books");
  if (stroedBooks) {
    books = JSON.parse(stroedBooks);
  }
  return books;
};

export const saveBook = (book) => {
  let books = getBooks();
  const isExist = books.find((d) => d.bookId === book.bookId);
  if (isExist) {
    return toast.error("Already Bookmarked!");
  }
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
  toast.success("Blog Bookmarked Successfully!");
};
