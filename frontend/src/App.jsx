import { Route, Routes } from "react-router";
import Home from "./components/home/Home";
import Courses from "./components/courses/courses";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </>
  );
}
export default App;
