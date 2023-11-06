
import { useState } from "react"
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";

import { getUserData, updateProfile } from "../../Redux/Slices/AuthSlice";
import HomeLayout from '../../Layouts/HomeLayout';
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";



export default function EditProfile() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data, setData] = useState({
        previewImage: "",
        fullName: "",
        avatar: undefined,
        // userId: undefined,
        userId: useSelector((state) => state?.auth?.data?._id)
    })
    function handleImageUpload(e) {
        e.preventDefault();
        const uploadImage = e.target.files[0];
        if (uploadImage) {
            const filereader = new FileReader();
            filereader.readAsDataURL(uploadImage)
            filereader.addEventListener("load", function () {
                setData({
                    ...data,
                    previewImage: this.result,
                    avatar: uploadImage
                })
            })
        }
    }
    function handleInputChange(e) {
        const [name, value] = e.target;
        setData({
            ...data,
            [name]: value
        })

    }
    async function onFormSubmit(e) {
        e.preventDefault()
        if (!data.fullName || !data.avatar) {
            toast.error("All fields are mandatory")
            return
        }
        if (data.fullName.length < 5) {
            toast.error("name cannot be of less than 5 characters");
            return
        }
        const formData = new FormData();
        formData.append("fullName", data.fullName)
        formData.append("avatar", data.avatar)
        //API Request usng asyncthunk
        await dispatch(updateProfile(data.userId, data))
        await dispatch(getUserData())

        navigate("/user/profile")

    }

    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-[100vh]"

            >
                <form
                    onSubmit={onFormSubmit}
                    className="flex flex-col justify-center gap-5 rounded-lg text-white w-80 p-5 min-h-[26rem]  shadow-[0_0_10px_black]"
                >
                    <h1 className="text-center text-2xl font-semibold ">Edit Profile</h1>
                    <label className="w-28 h023 rounded-full m-auto">
                        {data.previewImage ? (
                            <img src={data.previewImage}
                                className="w-28 h-28 rounded-full  m-auto" />

                        ) : (
                            <BsPersonCircle className="w-28 h-28 rounded-full m-auto" />

                        )}

                    </label>
                    <input onChange={handleImageUpload} className="hidden" type="file" id="image_uploads"
                        name="image_uploads" accept=".jpg , .png .svg , .jpeg" />
                    <div className="flex flex-col gap-1">
                        <label htmlFor="fullName" className="text-lg font-semibold ">Full Name</label>
                        <input
                            required
                            type="text"
                            name="fullName"
                            id="fullName"
                            placeholder="Enter your name"
                            className="transparent px-2 py-1 border"
                            value={data.fullName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit" className="w-full bg-yellow-300 hover:bg-yellow-500 transistion-all ease-in-out rounded-sm py-2 text-lg cursor-pointer">
                        Update Profile
                    </button>
                    <Link to="/user/profile" >
                        <p className="link text-accent cursor-pointer flex items-center justify-center w-full gap-2"> <AiOutlineArrowLeft/> GO back to Profile</p>
                    </Link>

                </form>


            </div>

        </HomeLayout>
    )
}
