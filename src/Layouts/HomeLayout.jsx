import { AiFillCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link,  useNavigate } from "react-router-dom";

import Footer from "../Components/Footer";
import { logout } from "../Redux/Slices/AuthSlice";

export default function HomeLayout({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //for checkin is use is Logged in
  const isLoggedin = useSelector((state) => state?.auth?.isLoggedIn);
  //for displaying the option acc to role

  const role = useSelector((state) => state?.auth?.role);

  function changewidth() {
    const drawerside = document.getElementsByClassName("drawer-side");
    drawerside[0].style.width = "auto";
  }

  function hideDrawer() {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;
    const drawerside = document.getElementsByClassName("drawer-side");
    drawerside[0].style.width = "0";
  }

  async function handleLogout(e){
    e.preventDefault()
    const res = await dispatch(logout())
    if(res?.payload?.success) {
      navigate("/")
    }   
  }


  return (
    <div className="min-h-[90vh]">
      <div className="drawer absolute left-0 z-51 ">
        <input className="drawer-toggle" id="my-drawer" type="checkbox" />

        <div className="drawer-content">
          <label htmlFor="my-drawer" className="cursor-pointer relative">
            <FiMenu
              onClick={changewidth}
              size={"32px"}
              className="font-bold text-white m-4"
            />
          </label>
        </div>
        <div className="drawer-side w-0">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 h-[90%] w-48 sm:w-80 bg-base-200 text-base-content relative">
            <li className="w-fit absolute right-2 z-50">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={24} />
              </button>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            {isLoggedin && role === "ADMIN" && (
              <li>
                <Link to="/admin/dasboard">Admin Dashboard</Link>
              </li>
            )}
            <li>
              <Link to="/cources">ALL cources</Link>
            </li>
            <li>
              <Link to="/contact">ALL cources</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            {!isLoggedin && (
              <li className="absolute  bottom-4 w-[90%]">
                <div className="w-full flex item-center justify-center">
                  <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full ">
                    <Link to="/login">Login</Link>
                  </button>
                  <button className="btn-secondary px-4 py-1 font-semibold rounded-md w-full ">
                    <Link to="/Signup">Signup</Link>
                  </button>
                </div>
              </li>
            )}
            {isLoggedin && (
              <li className="absolute bottom-4 w-[90%]">
                <div className="w-full flex item-center justify-center">
                  <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full ">
                    <Link to="/Profile">Profile</Link>
                  </button>
                  <button className="btn-secondary px-4 py-1 font-semibold rounded-md w-full ">
                    <Link onClick={handleLogout}>Logout</Link>
                  </button>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
}
