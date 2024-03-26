import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <h1 className="text-2xl font-medium">Oops!</h1>
      <p className="py-2">Sorry, an unexpected error has occurred.</p>
      <Link to={"/"}>
        <button className="btn">Go Back</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
