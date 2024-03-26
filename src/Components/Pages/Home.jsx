import { useLoaderData } from "react-router-dom";
import Hero from "./Hero";
import Books from "./Books";

const Home = () => {
  const books = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <div>
        <h2 className="text-3xl font-bold text-center md:pt-8">Books</h2>
        <div className="grid md:grid-cols-3 gap-5 py-5 md:px-10">
          {books.map((book) => (
            <Books key={book.id} book={book}></Books>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
