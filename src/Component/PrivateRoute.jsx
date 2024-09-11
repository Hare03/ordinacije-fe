import { Cookies } from "react-cookie";
import { ROUTES } from "../constants"
import { Navigate } from "react-router-dom";
import {useCookies} from "react-cookie"



const PrivateRoute=({children})=>{
    
    const [cookies, setCookies]=useCookies(["role"])



if(cookies.role!=="admin") return <Navigate to={ROUTES.HOME}/>;

return children


}

export default PrivateRoute