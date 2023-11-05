
import { useState } from "react"
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

import { getUserData, updateProfile } from "../../Redux/Slices/AuthSlice";
import HomeLayout from '../../Layouts/HomeLayout';



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
                className="flex flex-col justify-center gap-5 rounded-lg text-white w-80 p-5 min-h-[26rem]  shadow-[0_0_10px_black] "
                >

                </form>


            </div>

        </HomeLayout>
    )
}
