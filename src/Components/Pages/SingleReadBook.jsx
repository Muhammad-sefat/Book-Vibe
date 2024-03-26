import { GrLocation } from "react-icons/gr";
import { GoPeople } from "react-icons/go";
import { RiPagesLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const SingleReadBook = ({ book }) => {
  const navigate = useNavigate();
  function handleBtn() {
    navigate(`/book/:id`);
  }
  const {
    author,
    category,
    image,
    bookName,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    rating,
  } = book;
  return (
    <div className="py-5">
      <div className="card card-side flex flex-col md:flex-row bg-base-100 shadow-xl p-5 border">
        <figure className="rounded-md bg-gray-200">
          <img className="md:w-[50vh] p-5" src={image} alt="book" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>By : {author}</p>
          <div className="flex items-center flex-wrap gap-5">
            <span className="font-bold"> Tag:</span>
            {tags.map((tag) => (
              <a
                key={tag.id}
                className=" px-2 rounded-xl bg-green-100 hover:underline text-green-500 font-bold"
              >
                #{tag}
              </a>
            ))}
            <div className="flex gap-2 items-center">
              <GrLocation></GrLocation>
              <p>Year Of Publishing : {yearOfPublishing}</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex gap-2 items-center">
              <GoPeople></GoPeople>
              <p>Publisher : {publisher}</p>
            </div>
            <div className="flex gap-2 items-center">
              <RiPagesLine></RiPagesLine>
              <p>Pages : {totalPages}</p>
            </div>
          </div>
          <hr />
          <div className="flex items-center gap-5">
            <div className="bg-blue-100 text-blue-400 rounded-lg p-2">
              Category : {category}
            </div>
            <div className="bg-orange-100 text-orange-400 rounded-lg p-2">
              Rating : {rating}
            </div>
            <Link>
              <button
                onClick={handleBtn}
                className="btn bg-green-500 text-white font-semibold"
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
SingleReadBook.propTypes = {
  book: PropTypes.object.isRequired,
};

export default SingleReadBook;
