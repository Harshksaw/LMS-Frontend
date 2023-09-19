import { Link } from "react-router-dom";

import  img3 from "../Assets/Images/img3.jpeg";
import HomeLayout from "../Layouts/HomeLayout";

export default function HomePage() {
  return (
    <HomeLayout>
      <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
        <div className="w-1/2 space-y-6">
          <h1 className="text-5xl font-semibold ">
            Find out best
            <span className="text-yellow-600 font-bold">Online Courses</span>
          </h1>
          <p className="text-xl text-gray-200">
            We have a large Library of Courses taught by skilled and qualified
            faculties
          </p>
        </div>
        <div className="space-x-6">
          <Link to= '/courses' >
            <button className="bg-yellow-400 my-2 px-7 py-3 rounded-md font-semibold text-lg cursor-pointer  hover:bg-yellow-600 transition-all ease-in-out duration-300">
              Explore Courses
            </button>
          </Link>
          <Link to= '/contact' >
            <button className="  border bg-yellow-400 my-2 px-5 py-3  rounded-md font-semibold text-lg cursor-pointer  hover:bg-yellow-800 transition-all ease-in-out duration-3">
              Contact Us
            </button>
          </Link>
        </div>

        <div className="w-1/2 flex items-center justify-center">
            <img alt = "Homepage " src={img3}/>

        </div>
      </div>
    </HomeLayout>
  );
}
