import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Pages/Home.jsx";
import ListedBooks from "./Components/Pages/ListedBooks.jsx";
import PagesToRead from "./Components/Pages/PagesToRead.jsx";
import Book from "./Components/Pages/Book.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import { Toaster } from "react-hot-toast";
import ReadBook from "./Components/Pages/ReadBook.jsx";
import WishlistBook from "./Components/Pages/WishlistBook.jsx";
import Review from "./Components/Pages/Review.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../books.json"),
      },
      {
        path: "/book/:id",
        element: <Book></Book>,
        loader: () => fetch("../books.json"),
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element: <ReadBook></ReadBook>,
          },
          {
            path: "wishlistbook",
            element: <WishlistBook></WishlistBook>,
          },
        ],
      },
      {
        path: "/review",
        element: <Review></Review>,
      },
      {
        path: "/pagestoread",
        element: <PagesToRead></PagesToRead>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster></Toaster>
  </React.StrictMode>
);
