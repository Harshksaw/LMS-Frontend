import React from 'react'
import { sidebarLinks, sidebarlinks } from '../../../data/dashboard-links'
import { logout } from "../../../services/operations/authAPI"


import { useSelector } from 'react-redux'
import SidebardLink from './SidebardLink'
const Sidebar = () => {

    const { user, loading: profileLoading } = useSelector((state) => state.profile)
    const { loading: authLoading } = useSelector((state) => state.auth);
    if (authLoading || profileLoading) {
        return (
            <div className='loading'>
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <div className=''>
            <div className='flex min-w-[200px] flex-col border-r-[1px] border-r-richblack-700
        h-[calc(100vh-3.5rem)] bg-richblue-800 py-18 
        '>
                <div>
                    {
                        sidebarLinks.map((link )=>{
                            if(link.title && user?.accoutType === link.accountType){
                                return(
                                        <SidebardLink key={link.id} link={link} iconName={link.icon} />
                                )
                            }
                        })
                    }

                </div>

            </div>

        </div>
    )
}

export default Sidebar
