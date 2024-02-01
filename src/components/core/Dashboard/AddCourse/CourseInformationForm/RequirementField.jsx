import React, { useState } from 'react'

const RequirementField = ({name , label , register ,  errors, setValue, getValues}) => {

    const [requirement, setRequirement] = useState("");
    const [ requirementList, setRequirementList] = useState([])

    const handleAddRequirement = ()=>{
        if(requirement){
            setRequirement([...setRequirementList, requirement]);
            setRequirement("");
        }
    }
    const handleRemoveRequirement = ()=>{
        const updatedRequirementList = [...requirementList];
        updatedRequirementList.splice(index, 1);
        setRequirementList(updatedRequirementList)

    }

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-richblack-5" htmlFor={name}>
        {label} <sup className="text-pink-200">*</sup>
      </label>
      <div className="flex flex-col items-start space-y-2">
        <input
          type="text"
          id={name}
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          className="form-style w-full"
        />
        <button
          type="button"
          onClick={handleAddRequirement}
          className="font-semibold text-yellow-50"
        >
          Add
        </button>
      </div>
      
      </div>
  )
}

export default RequirementField
