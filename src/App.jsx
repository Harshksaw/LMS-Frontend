import "./App.css";

import { Route, Routes } from "react-router-dom";

import RequireAuth from "./Components/Auth/RequireAuth";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import CourseDescription from "./Pages/Course/CourseDescription";
import CourseList from "./Pages/Course/CourseList";
import CreateCourse from './Pages/Course/CreateCourse';
import AddLecture from "./Pages/Dashboard/Addlecture";
import DisplayLectures from "./Pages/Dashboard/DisplayLecture";
import Denied from "./Pages/Denied";
import HomePage from "./Pages/HomePage";
import Login from './Pages/Login';
import Notfound from "./Pages/Notfound";
import CheckOut from "./Pages/Payment/Checkout";
import CheckoutSuccess from "./Pages/Payment/CheckoutSuccess";
import CheckOutFailure from "./Pages/Payment/PaymentFailure";
import Signup from "./Pages/Signup";
import EditProfile from "./Pages/User/EditProfile";
import Profile from './Pages/User/Profile';
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
          <Route path = '/course/addlecture'  element= {<AddLecture/>}/>
        </Route>
        {/* AUTH wrapper */}
        <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} /> } >

          <Route path="/user/profile" element={<Profile/>}/>
          <Route path="/user/editprofile" element={<EditProfile />} />
          <Route path="/checkout" element= {<CheckOut/>}/>
          <Route path="/checkout/success" element= {<CheckoutSuccess/>}/>
          <Route path="/checkout/failure" element= {<CheckOutFailure/>}/>
        </Route>

        <Route path="/denied" element={<Denied />} />
        <Route path="*" element={<Notfound />} />

        <Route path = '/course/displaylectures' element={<DisplayLectures/>}/>

      </Routes>
    </>
  );
}

export default App;
