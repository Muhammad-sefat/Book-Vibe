import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
const Books = ({ book }) => {
  const { bookName, author, image, rating, tags, category } = book;
  return (
    <div className="p-5 border rounded-md">
      <div className="card bg-base-100 shadow-xl h-full">
        <figure>
          <img className="p-5 md:h-[50vh]" src={image} alt="Shoes" />
        </figure>
        <div className="flex flex-wrap py-2 gap-2 border-t border-dashed dark:border-gray-600">
          {tags.map((tag) => (
            <a
              key={tag.id}
              rel="noopener noreferrer"
              href="#"
              className="mx-auto px-4 rounded-sm hover:underline text-lime-600 font-bold"
            >
              {tag}
            </a>
          ))}
        </div>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p className="font-medium">By : {author}</p>
          <hr />
          <div className="flex justify-between items-center">
            <p>{category}</p>
            <div className="flex items-center gap-2">
              <p>{rating}</p>
              <CiStar></CiStar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Books.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Books;
