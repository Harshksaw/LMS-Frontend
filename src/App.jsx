import "./App.css";

import { Route, Routes } from "react-router-dom";

import RequireAuth from "./Components/Auth/RequireAuth";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import CourseDescription from "./Pages/Course/CourseDescription";
import CourseList from "./Pages/Course/CourseList";
import CreateCourse from './Pages/Course/CreateCourse';
import Denied from "./Pages/Denied";
import HomePage from "./Pages/HomePage";
import Login from './Pages/Login';
import Notfound from "./Pages/Notfound";
import Signup from "./Pages/Signup";
import Profile from './Pages/User/Profile';
import EditProfile from "./Pages/User/EditProfile";
function App() {
  return (
    //using layout
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/courses" element={<CourseList />} />
        <Route path="/course/description" element={<CourseDescription />} />


        <Route path="/contact" element={<Contact />} />

        {/* //accessible only to admin */}
        <Route element={<RequireAuth allowedRoles={['ADMIN']} />}>

          <Route path="/course/create" element={<CreateCourse />} />
        </Route>
        {/* AUTH wrapper */}
        <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} /> } >

          <Route path="/user/profile" element={<Profile/>}/>
          <Route path="/user/editprofile" element={<EditProfile />} />
        </Route>

        <Route path="/denied" element={<Denied />} />
        <Route path="*" element={<Notfound />} />

      </Routes>
    </>
  );
}

export default App;
