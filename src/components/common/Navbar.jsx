import { Link, matchPath } from "react-router-dom"

import logo from '../../../assets/Logo/Logo-Full-Light.png'
import { NavbarLinks } from "../../data/navbar-links"
import { BsChevronDown } from "react-icons/bs"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { AiOutlineShoppingCart } from "react-icons/ai"
import ProfileDropdown from "../core/Auth/ProfileDropDown"
import { useEffect, useState } from "react"
import { apiConnector } from "../../services/apiconnector"
import { categories } from "../../services/api"
//fetchin states



const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);


  const location = useLocation()
  function matchRoute(route) {                                   // if route is matched with (current route) then return true and color of text turn yellow otherwise white;
    return matchPath({ path: route }, location.pathname)
  }


  const [subLinks, setSubLinks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      setLoading(true)
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API)
        console.log(res.data.data)
        setSubLinks(res.data.data)
      } catch (error) {
        console.log("Could not fetch Categories.", error)
      }
      setLoading(false)
    })()
  }, [])

  console.log(subLinks)
  return (
    <div className='flex h-14 items-center justify-center border-b-[2px] border-b-richblack-700'>
      <div className='flex w-11/12 max-w-maxContent items-center justify-between '>
        <Link to="/">
          <img src={logo} alt="logo" className='h-8' loading='lazy' />
        </Link>

        <nav>
          <ul className="flex gap-x-6 text-richblack-25">

          
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <>
                    <div
                      className={`group relative flex cursor-pointer items-center gap-1 ${
                        matchRoute("/catalog/:catalogName")
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      <p>{link.title}</p>
                      <BsChevronDown />

                      <div className="invisible absolute  bg-gradient-to-r from-blue-500 to-gray-500 left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg  p-4  opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                        <div className="absolute left-[50%]  top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                        {loading ? (
                          <p className="text-center text-red-500">Loading...</p>
                        ) : 
                        
                        subLinks.length > 0 ? (
                          <>
                            
                            {subLinks?.map((subLink, i) => (
                                <Link
                                  to={`/catalog/${subLink.name
                                    .split(" ")
                                    .join("-")
                                    .toLowerCase()}`}
                                  className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                  key={i}
                                >
                                  
                                  <p className="text-2xl font-bold text-gray-800 hover:text-yellow-500 transition-colors duration-300">
                                    {subLink.name}</p>
                              
                                </Link>
                              ))}
                          </>
                        ) 
                        : (
                          <p className="text-center">No Courses Found</p>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <nav>
          <div className="flex gap-x-4 items-center">
            {
              user && user?.accountType !== "Instructor" && (
                <Link to='/dashboard.cart'>
                  <AiOutlineShoppingCart className="text-richblack-25 text-2xl" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white 
                  text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {totalItems}
                  </span>
                </Link>




              )
            }
            {
              token === null && (
                <Link to='/login'>
                  <button className="bg-richblack-500 text-richblack-25 rounded-lg px-4 py-2">Login</button>
                </Link>
              )
            }
            {
              token === null && (
                <Link to='/signup'>
                  <button className="bg-richblack-500 text-richblack-25 rounded-lg px-4 py-2">Register</button>
                </Link>
              )
            }
            {
              token != null && (
                <ProfileDropdown />
              )
            }



          </div>


        </nav>



      </div>


    </div>
  )
}

export default Navbar