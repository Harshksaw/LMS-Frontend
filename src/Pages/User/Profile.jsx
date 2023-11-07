import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom';

import HomeLayout from "../../Layouts/HomeLayout";


export default function Profile() {
    const dispatch = useDispatch()
    const userData = useSelector((state) => state?.auth?.data);

    return (
        <HomeLayout>
            <div className="min-h-[90vh] flex justify-center items-center border-white font-bold">

                <div className="my-5  w-1/3 flex flex-col gap-4 rounded-lg p-4 text-blue-700   shadow-[0_0_10px_black] bg-slate-500">
                    <img

                        className="m-auto 2-40 rounded-full border border-black "
                        src={userData?.avatar?.secure_url}
                    />
                    <h3 className="text-3xl font-bold capitalize text-center text-yellow-500  underline u text-shadow-sm">
                        {userData?.fullName}
                    </h3>
                    <div className="grid grid-cols-2">
                        <p>Email:</p><p>{userData?.email}</p>

                        <p>Role :</p><p>{userData?.role}</p>

                        <p>Subscription:</p>
                        <p>{userData?.subscription?.status === "active" ? "Action" :"Inactive"}</p>

                    </div>
                    <div className="flex items-center justify-between gap-2">
                        <Link to="/changepassword" className = "w-1/2 bg-yellow-400  hover:bg-yellow-600 transition-all duration-300 rounded-sm font-semibold py-2 cursor-pointer text-center" >
                            <button >Change Password</button>
                        </Link>
                        <Link to="/user/editprofile" className = "w-1/2 bg-yellow-400  hover:bg-yellow-600 transition-all duration-300 rounded-sm font-semibold py-2 cursor-pointer text-center " >
                            <button >Edit Profile</button>
                        </Link>


                    </div>
                    {userData?.subscription?.active == "active" || (
                        <button className="w-full bg-red-500 hover:bg-red-800">
                            Cancel Subscription
                        </button>
                    )}
                </div>
            </div>

        </HomeLayout>


  )
}
