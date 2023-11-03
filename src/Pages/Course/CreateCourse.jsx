
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import toast from 'react-hot-toast';
export default function CreateCourse() {
return (

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [userInput , setUserInput] = useState({
      title : "",
      category: "",
      createdBy: "",
      description: "",
      thumbnail: null,
      previewImage : "",
      })

    function handleImageUpload(e){
      e.prevenDefault();
      const uploadedImage = e.target.value[0];
      if(uploadedImage){
        const fileReader = new FileReader();
        fileReader.readDataURL(uploadedImage);
        fileReader.addEventListener("load", function(){
          setUserInput({
            ...useInput,
            previewImage: this.result,
            thumbnail: uploadedImage
          })
        })
      }



    }
    function handleUserInput(e){
      const {name , value } = e.target;
      setUserInput({
        ...userInput,
        [name]: value
      })
    }
    function onFormSubmit(e){
      e.prevenDefault();
      if(!userInput.title || !userInput.description || !userInput.category || !userInput.createdBy || !userInput.thumbnail){
        toast.error("All FIeld are mandatory");
        return;
      }
      
    }

)
}