import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <div className="my-10">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
        Got a question? Get in touch
      </h1>
      <p className="text-center text-lg pt-4">
        We're here to help.
        <Link to={"/about"}>
          <span className="pl-1 text-[#008489] hover:underline cursor-pointer">
            Send us an email
          </span>
        </Link>
      </p>
    </div>
  );
};

export default GetInTouch;
