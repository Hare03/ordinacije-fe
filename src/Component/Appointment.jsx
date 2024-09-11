import { Modal, TextField, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios"
import { getUserId } from "../CustomHooks.jsx/HookID";



const Appointment=({open, handleClose})=>{

    const [surname, setSurname]=useState("")
    const [email, setEmail]=useState("")
    const [name, setName]=useState("")

    const userID=getUserId()

    const Rezervisi=async(e)=>{

    e.preventDefault()

try{

        await axios.post("http://localhost:8070/appointment",{name, surname, email, userID})

}catch(e){

        console.log(e)

}
 }


return <Modal className="flex justify-center items-center" open={open}>

<div className="bg-white w-3/4 h-5/6 flex  flex-col gap-3 p-2">

<TextField value={name} onChange={(e)=>setName(e.target.value)} label="name"/>
<TextField value={surname} onChange={(e)=>setSurname(e.target.value)} label="surname"/>
<TextField value={email} onChange={(e)=>setEmail(e.target.value)} label="email"/>
<Button onClick={Rezervisi}  variant="contained">Rezerviši !</Button>

<div>

</div>

</div>

    </Modal>
 
}

export default Appointment