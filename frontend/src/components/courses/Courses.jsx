import Navbar from "../Navbar";
import Footer from "../Footer";
import Course from "../Course";

function Courses() {
  // console.log(list);
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Course/>
      </div>
      <Footer />
    </>
  );
}

export default Courses;
