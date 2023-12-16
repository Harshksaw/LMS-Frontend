import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CourseCard from "../../Components/CourseCard";
import HomeLayout from "../../Layouts/HomeLayout";
import { getAllCourses } from "../../Redux/Slices/CourseSlice";

export default function CourseList() {
  const dispatch = useDispatch();
  const { courseData } = useSelector((state) => state.course);

  async function loadCourses() {
    await dispatch(getAllCourses());
  }
  useEffect(() => {
    //it will call the function that will dispatch Asyncthunk -> whihc will get the courses from backend
    //and after which it will resolve the promise and get the data in course Data
    loadCourses();
  }, []);

  return (
    <HomeLayout>
      <div className="min-h-[90vh] pt-12 pl-20 flex flex-col text-white gap-10">
        <h1 className="text-center text-3xl font-semibold mb-2">
          Explore the courses made by
          <span className="font-bold text-yellow-700 underline ">
            Industry Experts
          </span>
        </h1>
        <div className="mb-10 flex flex-wrap gap-14">
          {courseData?.map((element) => {
            return <CourseCard key={element._id} data={element} />;
          })}
        </div>
      </div>
    </HomeLayout>
  );
}
