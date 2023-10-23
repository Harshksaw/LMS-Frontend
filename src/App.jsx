import "./App.css";

import { Route, Routes } from "react-router-dom";

import About from "./Pages/About";
import CourseList from "./Pages/Course/CourseList";
import HomePage from "./Pages/HomePage";
import Login from './Pages/Login';
import Notfound from "./Pages/Notfound";
import Signup from "./Pages/Signup";
function App() {
  return (
    //using layout
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signup"  element={<Signup/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/courses"  element={<CourseList/>}/>
        <Route path = "*" element= {<Notfound/>}/>

      </Routes>
    </>
  );
}

export default App;
