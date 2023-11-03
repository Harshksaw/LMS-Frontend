import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequireAuth({allowedRoles}){

    const {isLoggedIn , role} = useSelector((state) => state.auth);
    const location = useLocation();
    
    return !isLoggedIn && allowerRoles.find((myRole) => myRole == role) ? (
        <Outlet/>
    ): isLoggedIn ? (<Navigate to= "/denied" />) : (<Navigate to="login"/>)


}