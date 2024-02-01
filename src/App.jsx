

import './App.css'
import { Route, Routes } from "react-router-dom"
import OpenRoute from "./components/core/Auth/OpenRoute"
import Signup from "./pages/SignUp"
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import Home from "./pages/Home"
import Navbar from "./components/common/Navbar"
import VerifyEmail from './pages/VerifyEmail'
import About from './pages/About'
import UpdatePassword from './pages/UpdatePassword'
import Contact from "./pages/Contact"
import MyProfile from "./components/core/Dashboard/MyProfile"

import Dashboard from "./pages/Dashboard"
import PrivateRoute from './components/core/Auth/PrivateRoute'
import Error from "./pages/Error"
import Setting from "./components/core/Dashboard/Settings"
import EnrolledCourses from './components/core/Dashboard/EnrolledCourses'
import { ACCOUNT_TYPE } from './utils/constants'
import Cart from './components/core/Dashboard/Cart'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import AddCourse from './components/core/Dashboard/AddCourse'

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user} = useSelector((state)=> state.profile)


  return (
    <div className='w-screen min-h-screen bg-richblack-900 flex flex-col font-inter'>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        {/* <Route path="catalog/:catalogName" element={<Catalog/>} /> */}
        {/* <Route path="courses/:courseId" element={<CourseDetails/>} /> */}
        <Route path="signup" element={<OpenRoute> <Signup /> </OpenRoute>} />
        <Route path="login" element={<OpenRoute> <Login /> </OpenRoute>} />
        <Route path="forgot-password" element={<OpenRoute> <ForgotPassword /> </OpenRoute>} />
        <Route path="verify-email" element={<OpenRoute> <VerifyEmail /> </OpenRoute>} />
        <Route path="update-password/:id" element={<OpenRoute> <UpdatePassword /> </OpenRoute>} />
        <Route path="about" element={<OpenRoute> <About /> </OpenRoute>} />
        <Route path="/contact" element={<Contact />} />



        <Route

          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >

          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/settings" element={<Setting />} />
        
          {
            user?.ACCOUNT_TYPE === ACCOUNT_TYPE.STUDENT && (
              <>
                <Route path="dashboard/cart" element={<Cart/>} />
                <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
              </>
            )
          }
        <Route path="dashboard/add-course" element={<AddCourse />} />
        </Route>
        {
        user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
          <>
             {/* <Route path="add-course" element={<AddCourse />} /> */}
          {/* <Route path="dashboard/instructor" element={<Instructor />} /> */}
          {/* <Route path="dashboard/add-course" element={<AddCourse />} /> */}
          {/* <Route path="dashboard/my-courses" element={<MyCourses />} /> */}
          {/* <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} /> */}
          
          </>
        )
        }



        <Route path='*'  element={<Error/>} />

      </Routes>

    </div>
  )
}

export default App
