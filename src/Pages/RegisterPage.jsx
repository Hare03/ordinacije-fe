import { Modal, TextField, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import VerifyEmailModal from "./VerifyEmailModal";
import { ROUTES } from "../constants";

const RegisterPage=({open, handleClose})=>{

const [name, setName]=useState("")
const [surname, setSurname]=useState("")
const [email, setEmail]=useState("")
const [password, setPassword]=useState("")
const [createduserid, setCreateduserid]=useState("")
const [modalopened, setModalopened]=useState(false)




const navigate=useNavigate()


const closemodal=()=>{
    setName("")
    setSurname("")
    setEmail("")
    setPassword("")
    handleClose()
}

const register=async(e)=>{


e.preventDefault()

try{

        const response=await axios.post("http://localhost:8070/users/register", {name, surname, email, password})
        setCreateduserid(response?.data.id)
        setModalopened(true)

}catch(e){

        console.log(e)

}

}

    return <div className=" flex justify-center items-center pt-5 mt-5">
    <div className="bg-white w-1/2  h-1/3 flex justify-center items-center   flex-col rounded-3xl">
<div className="flex flex-col justify-center items-center gap-2 p-3">
<h1 className="border-b-4 uppercase text-xl text-blue-700 font-semibold ">Molimo registrujte se !</h1>

<h2 className="pt-3">Molimo unesite vaše ime</h2>
<TextField variant="outlined" value={name} onChange={(e)=>setName(e.target.value)} label="name"/>
<h2>Molimo unesite vaše prezime</h2>

<TextField variant="outlined" value={surname} onChange={(e)=>setSurname(e.target.value)} label="surname"/>
<h2>Molimo unesite vaš email</h2>

<TextField variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)} label="email"/>
<h2>Molimo unesite vašu lozinku</h2>

<TextField variant="outlined" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} label="password"/>
<Button onClick={register} variant="contained">Register !</Button>
<h2>Već imate nalog?</h2>
<h1 onClick={()=>navigate(ROUTES.LOGIN)} className="hover:cursor-pointer">Prijavite se !</h1>

</div>
<VerifyEmailModal close={()=>setModalopened(false)} open={modalopened} handleClose={()=>setModalopened(false)} createduserid={createduserid}/>

</div>

</div>

}

export default RegisterPage