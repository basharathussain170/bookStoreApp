import Lists from "../../public/list.json";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";

function Course() {
  // console.log(lists)
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-30 justify-center items-center text-center">
          <h1 className="text-2xl  md:text-5xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-10 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            excepturi praesentium. Repudiandae ducimus consectetur nam
            doloremque minus soluta maxime non. Similique iste autem neque
            consequatur cumque dolorum sit! Sed, veniam. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. At, excepturi praesentium.
            Repudiandae ducimus consectetur nam doloremque minus soluta maxime
            non. Similique iste autem neque consequatur cumque dolorum sit! Sed,
            veniam.
          </p>
          <Link to="/">
            <button className="mt-10 bg-pink-500 text-white px-4 py-2 rounded-lg tracking-widest duration-400 ease-in-out border border-gray-200 cursor-pointer hover:bg-white hover:text-pink-500 hover:border hover:border-pink-500">
              Back
            </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {Lists.map((item) => (
            <Cards key={item.name} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
