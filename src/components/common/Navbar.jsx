import { Link, matchPath } from "react-router-dom"

import logo from '../../../assets/Logo/Logo-Full-Light.png'
import { NavbarLinks } from "../../data/navbar-links"

import { useLocation } from "react-router-dom"


const Navbar = () => {
  const location = useLocation()
  function matchRoute(route) {                                   // if route is matched with (current route) then return true and color of text turn yellow otherwise white;
    return matchPath({ path: route }, location.pathname)
  }

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
                  <div>
                    catelog
                  </div>

                  // <>
                  //   <div className={`group relative flex cursor-pointer items-center gap-1 ${matchRoute("/catalog/:catalogName") ? "text-yellow-25" : "text-richblack-25"}`} >
                  //     <p> {link.title} </p>  <BsChevronDown />                                   {/*   "Catalog \/"   */}

                  //     <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                  //       <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                  //       {loading ? (<p className="text-center"> Loading... </p>) : subLinks?.length ? (

                  //         <>
                  //           {subLinks?.filter((subLink) => subLink?.courses?.length > 0)?.map((subLink, i) => (
                  //             <Link to={`/catalog/${subLink.name.split(" ").join("-").toLowerCase()}`} className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50" key={i} >
                  //               <p>{subLink.name}</p>
                  //             </Link>
                  //           ))
                  //           }
                  //         </>
                  //       ) : (<p className="text-center">No Courses Found</p>)
                  //       }
                  //     </div>
                  //   </div>
                  // </>

                ) : (
                  <Link to={link?.path}>
                    <p className={` ${matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"} `}> {link.title}  </p>
                  </Link>
                )
                }
              </li>
            ))}
          </ul>
        </nav>

        <nav>
          <div>
            <Link to='/login'>
              <button className='px-4 py-2 text-sm text-richblack-25 bg-yellow-25 rounded-md hover:bg-yellow-50 hover:text-richblack-25'>
                Login
              </button>
            </Link>

          </div>


        </nav>



      </div>


    </div>
  )
}

export default Navbar