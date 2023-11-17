import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from "chart.js";
import { useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { BsCollectionPlayFill, BsTrash } from "react-icons/bs";
import { FaUsers } from "react-icons/fa"
// import { FcSalesPerformanceCount } from 'react-icons/fc';
// import {GiMoneyStack} from "react-icons/gi"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";
import { deleteCourse, getAllCourses } from "../../Redux/Slices/courseSlice";
import { getPaymentRecord } from "../../Redux/Slices/RazorPaySlice";
import { getStatsData } from "../../Redux/Slices/StatSlice";
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip
); //Registering form Chart js

function AdminDashboard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const { allUsersCount, subscribedCount } = useSelector((state) => state.stat);
    // const { allPayments, monthlySaleRecord } = useSelector(
    //     (state) => state?.razorpay
    // )

    //dummy data
    const allUsersCount = 51;
    const subscribedCount = 128;
    const monthlySaleRecord = [23, 23, 23, 23, 12, 43, 43, 23, 53, 23, 12, 23]
    const allPayments = {}
        ;

    const userData = {
        labels: ["Registered User", "Enrolled User"],
        // labels: [20, 7],
        fontColor: "White",
        datasets: [
            {
                label: "User Details",
                data: [allUsersCount, subscribedCount],
                // data :[12, 10],
                backgroundColor: ["yellow", "green"],
                borderWidth: 1,
                borderColor: ["yellow", "green"],
            },
        ],
    };
    const saleData = {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        fontColor: "White",
        datasets: [
            {
                label: "Monthly Sale",
                data: monthlySaleRecord,
                backgroundColor: ["rgb(211, 19 , 132"],
                borderWidth: 2,
                borderColor: ["white"],
            },
        ],
    };

    const myCourse = useSelector((state) => state?.course?.courseData);

    async function onCourseDelete(id) {
        if (window.confirm("Are you sure you want to delete  the Course ? ")) {
            const res = await dispatch(deleteCourse(id));
            if (res?.payload?.success) {
                await dispatch(getAllCourses());
            }
        }
    }

    useEffect(() => {
        async () => {
            await dispatch(getAllCourses());

            await dispatch(getStatsData());
            await dispatch(getPaymentRecord());
        };
    }, []);

    return (
        <HomeLayout>
            <div className="min-h-[90vh] p-5 flex flex-col flex-wrap gap-10  text-white">
                <h1 className="text-center text-5xl font-semibold text-green-500 ">
                    Admin DashBoard
                </h1>

                <div className="grid grid-cols-2 gap-5 m-auto mx-10 ">
                    <div className="flex flex-col items-center  gap-10 p-5 shadow-lg rounded-md ">
                        {/* pie chart */}
                        <div className="w-80 h-80">

                            <Pie data={userData} />
                        </div>

                        <div className="grid grid-cols-2 gap-5  ">
                            <div className="flex  items-center gap-5 rounded-md p-5  justify-between  shadow-[0_0_5px_blue]">
                                <div className="flex flex-col items-center ">


                                    <p className=" font-semibold text-pink-600">
                                        Registered User
                                    </p>
                                    <h3 className="text-2xl font-semibold text-yellow-500">
                                        {allUsersCount}
                                    </h3>
                                    <FaUsers className="text-yellow-300  text-3xl" />
                                </div>
                                <div className="flex flex-col items-center gap-3">
                                    <p className=" font-semibold text-green-300">
                                        Enrolled User
                                    </p>
                                    <h1 className=" text-2xl font-semibold text-yellow-500">
                                        {subscribedCount}
                                    </h1>

                                    <FaUsers className="text-green-300  text-3xl" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-10 p-5 shadow-lg rounded-md">
                        <div className="h-80 w-full relative">
                            <Bar
                                className="absolute bottom-0 h-80 w-full "
                                data={saleData} options={{}}
                            />

                        </div>
                        <div className="grid gird-cols-2 gap-5">
                            <div className="flex flex-col items-center ">


                                <p className=" font-semibold text-pink-600">
                                    Subscription Count
                                </p>
                                <h3 className="text-2xl font-semibold text-yellow-500">
                                    {allPayments?.count}
                                </h3>
                                {/* <FcSalesPerformanceCount className="text-yellow-300  text-4xl" /> */}
                            </div>
                            <div className="flex flex-col items-center ">


                                <p className=" font-semibold text-pink-600">
                                    Total revenue
                                </p>
                                <h3 className="text-2xl font-bold text-yellow-500">
                                    {allPayments?.count * 499}
                                </h3>
                                {/* <GiMoneyStack className="text-green-500  text-4xl" /> */}
                            </div>

                        </div>


                    </div>
                </div>

                <div className="mx-[10%] w-[80%] self-center flex flex-col items-center justify-center gap-10 mb-10">

                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-center text-3xl font-semibold">
                            Courses overview
                        </h1>

                        <button
                            onClick={() => {
                                navigate("/course/create")
                            }}
                            className="w-fit bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 rounded py-2 px-4 font-semibold text-lg cursor-pointer"
                        >
                            Create new course
                        </button>
                    </div>


                    <table className="table overflow-x-scroll ">
                        <thead>

                            <tr>
                                <th>S No </th>
                                <th>Course Title</th>
                                <th>Course Category

                                </th>
                                <th>Instructor </th>
                                <th>Total Lectures</th>
                                <th>
                                    Description
                                </th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {myCourse?.map((course, idx) => {
                                return (
                                    <tr key={course._id}>
                                        <td>{idx + 1}</td>

                                        <td><textarea readOnly value={course.title} className="w-40 h-auto bg-transparent resize-none"> </textarea></td>
                                        <td>{course?.category}</td>
                                        <td>{course?.createdBy}</td>
                                        <td>{course?.numberOfLectures}</td>

                                        <td className="max-w-28 overflow-hidden text-ellipsis whitespace-nowrap">
                                            <textarea
                                                value={course?.description}
                                                readOnly
                                                className="w-80 h-auto bg-transparent resize-none"
                                            >

                                            </textarea>
                                        </td>
                                        <td>
                                            <button className="bg-green-500 p-2 shadow-md  w-fit hover:bg-green-900 transition-all ease-in-out duration-300 rounded py-2 font-semibold text-lg  px-4 cursor-pointer "
                                                onClick={() => navigate("/course/displaylectures", { state: { ...course } })}
                                            // onClick={()=>}
                                            >

                                                <BsCollectionPlayFill />
                                            </button>
                                            <button className="bg-red-500 p-2 shadow-md  w-fit hover:bg-red-800 transition-all ease-in-out duration-300 rounded py-2 font-semibold text-lg  px-4 cursor-pointer "

                                                onClick={() => onCourseDelete(course?._id)}
                                            >

                                                <BsTrash />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                </div>
            </div>
        </HomeLayout>
    );
}

export default AdminDashboard;
