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
    return toast.error("Already Added This Book!");
  }
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
  toast.success("Book Added Successfully!");
};

export const getBooks1 = () => {
  let books = [];
  const stroedBooks = localStorage.getItem("books1");
  if (stroedBooks) {
    books = JSON.parse(stroedBooks);
  }
  return books;
};

export const saveBook1 = (book) => {
  let books = getBooks1();
  const isExist = books.find((d) => d.bookId === book.bookId);
  if (isExist) {
    return toast.error("Already Added This Book!");
  }
  books.push(book);
  localStorage.setItem("books1", JSON.stringify(books));
  toast.success("Book Added Successfully!");
};
