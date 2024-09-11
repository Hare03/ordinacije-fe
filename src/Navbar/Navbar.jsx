import "./Navbar.css"
import logo1 from "../logo1.png"
import { Button } from '@mui/material';
import { useState, Link } from "react";
import StomatoloskeUsluge from "../Pages/StomatoloskeUsluge";
import { Navigate, useNavigate } from "react-router-dom";
import { ROUTES } from "../constants";
import Appointment from "../Component/Appointment";
import {useCookies} from "react-cookie"
import MyAppointments from "../Component/MyAppointments"
import Admin from "../Pages/Admin";
import RegisterPage from "../Pages/RegisterPage";





const Navbar=()=>{
    
    const navigate=useNavigate()
    const [menu, setMenu]=useState("")
    const [ismodalopened, setIsmodalopened]=useState(false)
    const [ismodalopened2, setIsmodalopened2]=useState(false)
    const [ismodalopened3, setIsmodalopened3]=useState(false)
    const [ismodalopened4, setIsmodalopened4]=useState(false)



    const [cookies, setCookies]=useCookies(["access_token"])
    const [roles, setRoles]=useCookies(["role"])



    const logout=()=>{
        setCookies("access_token", "")
        setRoles("role", "")
        localStorage.removeItem("userID")
        localStorage.removeItem("role")
        

    }


    return <div className="navbar">
<div className="logo1">
</div>
<ul className="navbar-menu">

    <li onClick={()=>navigate("/")} onMouseOver={()=>setMenu("home")} className={  menu==="home"?"active": ""}>home</li>
    <li onClick={()=>navigate("/stomatoloske-usluge")} onMouseOver={()=>setMenu("stomatoloske usluge")} className={menu==="stomatoloske usluge"?"active": ""}  >stomatoloske usluge</li>
    <li onClick={()=>navigate("/o-nama")} onMouseOver={()=>setMenu("o nama")} className={menu==="o nama"?"active": ""}>o nama</li>
    <li onClick={()=>navigate("/cjenovnik")} onMouseOver={()=>setMenu("cjenovnik")} className={menu==="cjenovnik"?"active": ""}>cjenovnik</li>
    <li onClick={()=>navigate("/kontakt")} onMouseOver={()=>setMenu("kontakt")} className={menu==="kontakt"?"active": ""}>kontakt</li>
    {roles.role !=="admin"? "" : <li onClick={()=>navigate(ROUTES.ADMIN)} onMouseOver={()=>setMenu("admin")} className={menu==="admin"?"active": ""} >admin</li>}


</ul>
<div className="flex gap-3">
{!cookies.access_token? <Button onClick={()=>navigate(ROUTES.LOGIN)} variant="contained">Prijava</Button>:""}
{!cookies.access_token? "" :<Button onClick={()=>setIsmodalopened3(true)} variant="contained">Rezerviši termin</Button>}
{!cookies.access_token? "" :<Button onClick={()=>setIsmodalopened4(true)} variant="contained">Moji termini</Button>}
{!cookies.access_token? "" :<Button onClick={logout} variant="contained">LogOut</Button>}


<Appointment open={ismodalopened3} handleClose={setIsmodalopened3}/>
<MyAppointments open={ismodalopened4} handleClose={setIsmodalopened4}/>
</div>

    </div>
}

export default Navbar