

import './App.css'
import {Route, Routes} from "react-router-dom"
import OpenRoute from "./components/core/Auth/OpenRoute"
import Signup from "./pages/Signup"
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import Home from "./pages/Home"
import Navbar from "./components/common/Navbar"
import VerifyEmail from './pages/VerifyEmail'
import About from './pages/About'
import UpdatePassword from './pages/UpdatePassword'
import Contact from "./pages/Contact"
function App() {


  return (
    <div className='w-screen min-h-screen bg-richblack-900 flex flex-col font-inter'>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="catalog/:catalogName" element={<Catalog/>} /> */}
          {/* <Route path="courses/:courseId" element={<CourseDetails/>} /> */}
          {/* <Route path="signup" element = { <OpenRoute > <Signup /> </OpenRoute> } />
          <Route path="login" element = { <OpenRoute> <Login /> </OpenRoute> } />
          
          <Route path="forgot-password" element = { <OpenRoute> <ForgotPassword /> </OpenRoute> } />
          <Route path="verify-email" element = { <OpenRoute> <VerifyEmail /> </OpenRoute> } />
          <Route path="update-password/:id" element = { <OpenRoute> <UpdatePassword /> </OpenRoute> } />
          <Route path="about" element = { <OpenRoute> <About /> </OpenRoute> } /> */}
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="verify-email" element={<VerifyEmail />} />
          <Route path="update-password/:id" element={<UpdatePassword />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />


          {/* //dashboard */}

          <Route path="dashboard/my-profile" element={<MyProfile/>}/>
          

        
      </Routes>
   
    </div>
  )
}

export default App
