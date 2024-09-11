import { Modal, TextField, Button } from "@mui/material";
import { useState } from "react";
import {useCookies} from "react-cookie"
import axios from "axios"
import { ROUTES } from "../constants";
import { useNavigate } from "react-router-dom";


const LoginPage=({open, handleClose})=>{

const [email, setEmail]=useState("")
const [password, setPassword]=useState("")
const [cookies, setCookies]=useCookies(["access_token"])

const navigate=useNavigate()

const login=async(e)=>{

    e.preventDefault()
    
    try{

             const response=await axios.post("http://localhost:8070/users/login",{email,password})

             setCookies("access_token", response.data.token)
             localStorage.setItem("userID", response.data.userID)
             setCookies("role", response.data.role)
             navigate(ROUTES.HOME)
    }catch(e){

             console.log(e)
    }
}

    return <div className="flex justify-center items-center m-20 p-20">
     <div className="bg-white w-1/4 h-1/2.5 flex justify-center items-center flex-col gap-3 p-3 rounded-3xl">

    <h1 className="border-b-4 uppercase text-xl ">Molimo prijavite se !</h1>
    <h2>Molimo unesite vaš email</h2>
    <TextField value={email} onChange={(e)=>setEmail(e.target.value)} label="email"/>
    <h2>Molimo unesite vašu lozinku</h2>
    <TextField type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  label="password"/>
    <Button onClick={login} variant="contained">LogIn</Button>
    <h2>Nemate nalog?</h2>
    <h2 className="hover:cursor-pointer" onClick={()=>navigate(ROUTES.REGISTER)}>Registruj se !</h2>

    
    </div>
    </div>
}

export default LoginPage