import { AiFillCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

// import Footer from "./Components/Footer";

export default function HomeLayout({ children }) {
  function changewidth() {
    const drawerside = document.getElementsByClassName("drawer-side");
    drawerside[0].style.width = 'auto';
  }

  function hideDrawer() {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;
    const drawerside = document.getElementsByClassName("drawer-side");
    drawerside[0].style.width = '0';
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
            <ul className="menu p-4 w-48 sm:w-80 bg-base-100 text-base-content relative">
              <li className="w-fit absolute right-2 z-50">
                <button onClick={hideDrawer}>
                  <AiFillCloseCircle size={24} />
                </button>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cources">ALL cources</Link>
              </li>
              <li>
                <Link to="/contact">ALL cources</Link>
              </li>
              <li>
                <Link to="/about">ALL cources</Link>
              </li>
            </ul>

        </div>
      </div>
      {children}
    </div>
  );
}
