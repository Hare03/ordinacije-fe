import { Modal, TextField, Button} from "@mui/material";
import { useState } from "react";
import axios from "axios"
import {useNavigate } from "react-router-dom";
import {ROUTES} from "../constants"


const VerifyEmailModal=({open, createduserid, close})=>{

const [code, setCode]=useState("")
const navigate=useNavigate()
const onSubmit=async(e)=>{

        e.preventDefault()

try{

        await axios.post("http://localhost:8070/users/verify-email" ,{code, user:createduserid})
        navigate(ROUTES.HOME)

}catch(e){

}

}

return <Modal open={open} className="flex justify-center items-center">

<div className="bg-white w-1/5 h-1/5 justify-center items-center flex gap-3 flex-col">
<h1>Kod je poslan na Vaš email !</h1>
<TextField  value={code} onChange={(e)=>setCode(e.target.value)} label="Verification code"/>
<Button onClick={onSubmit} variant="contained">Verify</Button>
</div>

</Modal>

}

export default VerifyEmailModal