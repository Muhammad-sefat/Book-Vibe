import { useLoaderData } from "react-router-dom";
import Hero from "./Hero";
import Books from "./Books";

const Home = () => {
  const books = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <div>
        <h2 className="text-3xl font-bold text-center">Books</h2>
        {books.map((book) => (
          <Books key={book.id} book={book}></Books>
        ))}
      </div>
    </div>
  );
};

export default Home;
