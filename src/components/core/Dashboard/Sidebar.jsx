import React, { useState } from "react";

import { logout } from "../../../services/operations/authAPI";
import { sidebarLinks } from "../../../data/dashboard-links";
import SidebarLink from "./SidebarLink";

import { useDispatch, useSelector } from "react-redux";
import { VscSignOut } from "react-icons/vsc";
import {useNavigate} from 'react-router-dom'
import ConfirmationModal from "../../common/ConfirmationModal";


const Sidebar = () => {
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  );
  const { loading: authLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [confirmationModal, setConfirmationModal] = useState(null);

  if (authLoading || profileLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="">
      <div
        className="flex min-w-[200px] flex-col border-r-[1px] border-r-richblack-700
        h-[calc(100vh-3.5rem)] bg-richblue-800 py-18 
        "
      >
        <div>
          {sidebarLinks.map((link) => {
            if (link.title && user?.accoutType === link.accountType) {
              return (
                <SidebarLink key={link.id} link={link} iconName={link.icon} />
              );
            }
          })}
        </div>

        {/* //horizontal line */}

        <div className="border-b-[1px] mb-6 h-[1px]  mx-auto w-10/12  mt-6  border-r-richblack-700  my-5"></div>

        {/* //logout  setting*/}

        <div className="flex flex-col">
          <SidebarLink
            link={{ name: "Logout", path: "/dashboard/settings" }}
            iconName="VsSettingsGear"
          />
          <button
          className="px-8 py-2 text-sm font-medium text-richblack-300"
            onClick={() =>
              setConfirmationModal({
                text1: "Are you sure you want to logout?",
                text2: "You will be logged out of your account",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler: () => dispatch(logout(navigate)),
                btn2Handler: () => setConfirmationModal(null),
              })
            }
          >
            <div className="flex items-center gap-x-2">
              <VscSignOut className="text-lg" />
              <span>Logout</span>
            </div>
          </button>


        </div>
      </div>
      {confirmationModal && <ConfirmationModal modalData= {confirmationModal} />}
    </div>
  );
};

export default Sidebar;
