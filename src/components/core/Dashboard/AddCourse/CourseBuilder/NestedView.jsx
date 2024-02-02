import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxDropdownMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { deleteSection, deleteSubSection } from "../../../../../services/operations/courseDetailsAPI";
import { setCourse } from "../../../../../slices/courseSlice";

export default function NestedView({ handleChangeEditSectionName }) {
  const { course } = useSelector((state) => state.course);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [addSubSection, setAddSubSection] = useState(false);
  const [editSubSection, setEditSubSection] = useState(false);

  const [viewSubSection, setViewSubSection] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(null);
  const handleDeleteSection = async(sectionId) => {
    //delete section
    const result = await deleteSection({ sectionId, courseId: course._id , token});

    if(result){
      dispatch(setCourse(result));
    }
    setConfirmationModal(null);
  };
  const handleDeleteSubSection = async(subSectionId, sectionId) => {
    const result = await deleteSubSection({ subSectionId, sectionId, courseId: course._id, token });
    if(result){
      dispatch(setCourse(result));
    }
    setConfirmationModal(null);
}
    return (
      <>
        <div
          className="rounded-lg bg-richblack-700 p-6 px-8"
          id="nestedViewContainer"
        >
          {course?.courseContent?.map((section) => (
            //Section DropDown

            <details key={section._id} open>
              {/* Section Dropdown Content */}
              <summary className="flex cursor-pointer items-center justify-between border-b-2 border-b-richblack-600 py-2">
                <div className="flex items-center gap-x-3">
                  <RxDropdownMenu className="text-2xl text-richblack-50" />
                  <p className="font-semibold text-richblack-50">
                    {section.sectionName}
                  </p>
                </div>

                <div className="flex items-center gap-x-3">
                  <button
                    onClick={handleChangeEditSectionName(
                      section._id,
                      section.sectionName
                    )}
                  >
                    <MdEdit className="text-xl text-richblack-300" />
                  </button>

                  <button
                    onClick={() => {
                      setConfirmationModal({
                        text1: "Delete This Section",
                        text2: "Are you sure you want to delete this section?",
                        btn1Text: "Delete",
                        btn2Text: "Cancel",
                        btn1Handle: () => handleDeleteSection(section._id),
                        btn2Handle: () => setConfirmationModal(null),
                      });
                    }}
                  >
                    <RiDeleteBin6Line className="text-xl text-richblack-300" />
                  </button>
                  <span className="font-medium text-richblack-300">|</span>
                  <AiFillCaretDown className={`text-xl text-richblack-300`} />
                </div>
              </summary>

              <div className="px-6 pb-4">
                {/* Render All Sub Sections Within a Section */}
                {section.subSection.map((data) => (
                  <div
                    key={data?._id}
                    onClick={() => setViewSubSection(data)}
                    className="flex cursor-pointer items-center justify-between gap-x-3 border-b-2 border-b-richblack-600 py-2"
                  >
                    <div className="flex items-center gap-x-3 py-2 ">
                      <RxDropdownMenu className="text-2xl text-richblack-50" />
                      <p className="font-semibold text-richblack-50">
                        {data.title}
                      </p>
                    </div>

                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-x-3"
                    >
                      <button
                        onClick={() =>
                          setEditSubSection({ ...data, sectionId: section._id })
                        }
                      >
                        <MdEdit className="text-xl text-richblack-300" />
                      </button>
                      <button
                        onClick={() =>
                          setConfirmationModal({
                            text1: "Delete this Sub-Section?",
                            text2: "This lecture will be deleted",
                            btn1Text: "Delete",
                            btn2Text: "Cancel",
                            btn1Handler: () =>
                              handleDeleteSubSection(data._id, section._id),
                            btn2Handler: () => setConfirmationModal(null),
                          })
                        }
                      >
                        <RiDeleteBin6Line className="text-xl text-richblack-300" />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Add New Lecture to Section */}
                <button
                  onClick={() => setAddSubSection(section._id)}
                  className="mt-3 flex items-center gap-x-1 text-yellow-50"
                >
                  <FaPlus className="text-lg" />
                  <p>Add Lecture</p>
                </button>
              </div>
            </details>
          ))}
        </div>

        {addSubSection ? (
          <SubSectionModal 
          modalData = {addSubSection}
          setModalData = {setAddSubSection}
          add = {true}
          />
        ) : viewSubSection ? (
          <SubSectionModal
          modalData = {viewSubSection}
          />
        ) : editSubSection ? (
          <SubSectionModal />
        ) : (
          <div></div>
        )}
        {
            confirmationModal ? (
                <ConfirmationModal
                modalData = {confirmationModal}
                setModalData = {setConfirmationModal}
                />
            ) : (
                <div></div>
            )
        }
      </>
    );
  };
}
