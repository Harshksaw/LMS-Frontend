
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { createNewCourse } from '../../Redux/Slices/CourseSlice';
import HomeLayout from '../../Layouts/HomeLayout';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
export default function CreateCourse() {


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [userInput, setUserInput] = useState({
    title: "",
    category: "",
    createdBy: "",
    description: "",
    thumbnail: null,
    previewImage: "",
  })

  function handleImageUpload(e) {
    e.prevenDefault();
    const uploadedImage = e.target.value[0];
    if (uploadedImage) {
      const fileReader = new FileReader();
      fileReader.readDataURL(uploadedImage);
      fileReader.addEventListener("load", function () {
        setUserInput({
          ...useInput,
          previewImage: this.result,
          thumbnail: uploadedImage
        })
      })
    }



  }
  function handleUserInput(e) {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value
    })
  }
  async function onFormSubmit(e) {
    e.prevenDefault();
    if (!userInput.title || !userInput.description || !userInput.category || !userInput.createdBy || !userInput.thumbnail) {
      toast.error("All FIeld are mandatory");
      return;
    }
    const response = await dispatch(createNewCourse(userInput))
    if (response?.payload?.success) {
      setUserInput({
        title: "",
        category: "",
        createdBy: "",
        description: "",
        thumbnail: null,
        previewImage: "",
      })
      navigate("/courses")
    }
  }
  return (
    <HomeLayout>
      <div className='flex items-center justify-center h-[100vh]'>

        <form onSubmit={onFormSubmit}
          className='flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-[700px]  my-10 shadow-[0_0_10px_black] relative'
        >
          <Link className="absolute , top-8 text-2xl link text-accent cursor-pointer">
            <AiOutlineArrowLeft />
          </Link>
          <h1 className='text-center text-2xl font-bold'>
            Create New Course
          </h1>
          <main className='grid grid-cols-2 gap-x-10'>
            <div className='gap-y-6'>
              <div >
                <label htmlFor='image_uploads' className='cursor-pointer'>
                  {userInput.previewImage ? (
                    <img className='w-full h-44 m-auto border'
                      src={userInput.previewImage} />)
                    : (
                      <div className='w-full h-44 m-aut flex items-center justify-center border'>
                        <h1 className='font-bold text-lg'>Upload your course thumbnail</h1>
                      </div>

                    )
                  }
                  <input className='hidden' type='file' id='image_uploads' accept='.jpg .jpeg .png' name='image_uploads'
                    onChange={handleImageUpload} />

                </label>

              </div>
            </div>

          </main>


        </form>
      </div>
    </HomeLayout>
  )
}