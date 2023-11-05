
import { useState } from "react"
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux"
import { updateProfile } from "../../Redux/Slices/AuthSlice";



export default function EditProfile() {
    const dispatch = useDispatch()

    const [data, setData] = useState({
        previewImage: "",
        fullName: "",
        avatar: undefined,
        userId: undefined,
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

        await dispatch(updateProfile(data.userId, data))
    }

    return (
        <div>

        </div>
    )
}
